use api_domain::ports::{input::project_facade, output::project_storage};
use derive_more::From;
use http_api_problem::HttpApiProblem;
use reqwest::StatusCode;
use rocket::{
	request::Request,
	response::{Responder, Result},
};

#[derive(Debug, From)]
pub struct ApiError(HttpApiProblem);

impl<'r, 'o: 'r> Responder<'r, 'o> for ApiError {
	fn respond_to(self, request: &'r Request<'_>) -> Result<'o> {
		self.0.respond_to(request)
	}
}

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
