use domain::{CommandId, Currency, GithubUserId, PaymentId, ProjectId, UserId};
use http_api_problem::{HttpApiProblem, StatusCode};
use presentation::http::guards::ApiKey;
use rocket::serde::json::Json;
use rust_decimal::Decimal;
use serde::{Deserialize, Serialize};

use crate::{application, presentation::http::dto};

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
	requestor_id: UserId,
	amount: Decimal,
	currency: &'static Currency,
	hours_worked: Option<u32>,
	reason: dto::payment::Reason,
}

#[post("/payments", data = "<request>", format = "application/json")]
pub async fn request_payment(
	_api_key: ApiKey,
	request: Json<Request>,
	request_payment_usecase: application::payment::request::Usecase,
) -> Result<Json<Response>, HttpApiProblem> {
	let Request {
		project_id,
		recipient_id,
		requestor_id,
		amount,
		currency,
		hours_worked,
		reason,
	} = request.into_inner();

	let (payment_id, command_id) = request_payment_usecase
		.request(
			project_id,
			requestor_id,
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
	invoice_payment_usecase: application::payment::invoice::Usecase,
) -> Result<(), HttpApiProblem> {
	let InvoiceReceivedRequest { payments } = request.into_inner();

	invoice_payment_usecase.mark_invoice_as_received(payments).await.map_err(|e| {
		{
			HttpApiProblem::new(StatusCode::INTERNAL_SERVER_ERROR)
				.title("Unable to mark_invoice_as_received")
				.detail(e.to_string())
		}
	})?;

	Ok(())
}
