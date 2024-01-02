use domain::{
	AggregateRepository, CommandId, Currency, GithubUserId, Payment, PaymentId, ProjectId,
};
use http_api_problem::{HttpApiProblem, StatusCode};
use presentation::http::guards::{ApiKey, Claims, Role};
use rocket::{serde::json::Json, State};
use rust_decimal::Decimal;
use serde::{Deserialize, Serialize};

use crate::{application, domain::permissions::IntoPermission, presentation::http::dto};

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Response {
	pub payment_id: PaymentId,
	pub command_id: CommandId,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Request {
	project_id: ProjectId,
	recipient_id: GithubUserId,
	amount: Decimal,
	currency: &'static Currency,
	hours_worked: Option<u32>,
	reason: dto::payment::Reason,
}

#[post("/payments", data = "<request>", format = "application/json")]
pub async fn request_payment(
	_api_key: ApiKey,
	request: Json<Request>,
	claims: Claims,
	role: Role,
	payment_repository: &State<AggregateRepository<Payment>>,
	request_payment_usecase: application::payment::request::Usecase,
) -> Result<Json<Response>, HttpApiProblem> {
	let Request {
		project_id,
		recipient_id,
		amount,
		currency,
		hours_worked,
		reason,
	} = request.into_inner();

	let caller_id = claims.user_id;

	if !role
		.to_permissions((*payment_repository).clone())
		.can_spend_budget_of_project(&project_id)
	{
		return Err(HttpApiProblem::new(StatusCode::UNAUTHORIZED)
			.title("Unauthorized operation on project")
			.detail(format!(
				"User {} needs project lead role to create a payment request on project {}",
				caller_id, project_id
			)));
	}

	let (payment_id, command_id) = request_payment_usecase
		.request(
			project_id,
			caller_id,
			recipient_id,
			amount,
			currency,
			hours_worked,
			reason.try_into()?,
		)
		.await
		.map_err(|e| {
			{
				HttpApiProblem::new(StatusCode::INTERNAL_SERVER_ERROR)
					.title("Unable to process request_payment request")
					.detail(e.to_string())
			}
		})?;

	Ok(Json(Response {
		payment_id,
		command_id,
	}))
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InvoiceReceivedRequest {
	payments: Vec<PaymentId>,
}

#[put(
	"/payments/invoiceReceivedAt",
	data = "<request>",
	format = "application/json"
)]
pub async fn mark_invoice_as_received(
	_api_key: ApiKey,
	request: Json<InvoiceReceivedRequest>,
	role: Role,
	payment_repository: &State<AggregateRepository<Payment>>,
	invoice_payment_usecase: application::payment::invoice::Usecase,
) -> Result<(), HttpApiProblem> {
	let InvoiceReceivedRequest { payments } = request.into_inner();

	let caller_permissions = role.to_permissions((*payment_repository).clone());

	if payments
		.iter()
		.any(|payment_id| !caller_permissions.can_mark_invoice_as_received_for_payment(payment_id))
	{
		return Err(HttpApiProblem::new(StatusCode::UNAUTHORIZED)
			.title("Only recipient can mark invoice as received"));
	}

	invoice_payment_usecase.mark_invoice_as_received(payments).await.map_err(|e| {
		{
			HttpApiProblem::new(StatusCode::INTERNAL_SERVER_ERROR)
				.title("Unable to mark_invoice_as_received")
				.detail(e.to_string())
		}
	})?;

	Ok(())
}
