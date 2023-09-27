use api_domain::ports::{input::project_facade, output::project_storage};
use derive_more::From;
use http_api_problem::HttpApiProblem;
use reqwest::StatusCode;
use rocket::response::Responder;

#[derive(Debug, From, Responder)]
pub struct ApiError(HttpApiProblem);

impl From<project_facade::Error> for ApiError {
	fn from(value: project_facade::Error) -> Self {
		match value {
			project_facade::Error::ProjectStorage(error) => error.into(),
		}
	}
}

impl From<project_storage::Error> for ApiError {
	fn from(_: project_storage::Error) -> Self {
		HttpApiProblem::new(StatusCode::INTERNAL_SERVER_ERROR).title("oops").into()
	}
}
