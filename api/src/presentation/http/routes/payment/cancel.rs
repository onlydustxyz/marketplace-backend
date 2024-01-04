use http_api_problem::{HttpApiProblem, StatusCode};
use presentation::http::guards::ApiKey;
use rocket::serde::json::Json;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use crate::application;

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Response {
	pub command_id: Uuid,
}

#[delete("/payments/<payment_id>")]
pub async fn cancel_payment(
	_api_key: ApiKey,
	payment_id: Uuid,
	usecase: application::payment::cancel::Usecase,
) -> Result<Json<Response>, HttpApiProblem> {
	let payment_id = payment_id.into();

	let command_id = usecase.cancel(&payment_id).await.map_err(|e| {
		HttpApiProblem::new(StatusCode::INTERNAL_SERVER_ERROR)
			.title("Unable to process cancel_payment request")
			.detail(e.to_string())
	})?;

	Ok(Json(Response {
		command_id: command_id.into(),
	}))
}
