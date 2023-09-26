use std::sync::Arc;

use api_domain::{models::Project, ports::input::project_facade::ProjectFacadePort};
use presentation::http::guards::ApiKey;
use rocket::{serde::json::Json, State};

use crate::{
	dto::{CreateProjectRequest, CreateProjectResponse},
	error::ApiError,
};

#[post("/projects", data = "<request>", format = "application/json")]
pub async fn create(
	_api_key: ApiKey,
	request: Json<CreateProjectRequest>,
	usecase: &State<Arc<dyn ProjectFacadePort>>,
) -> Result<Json<CreateProjectResponse>, ApiError> {
	let CreateProjectRequest {
		name,
		short_description,
		long_description,
		logo_url,
		more_info_url,
		hiring,
		visibility,
		rank,
		repos: _,
		leaders: _,
		sponsors: _,
		budget_allocations: _,
	} = request.into_inner();

	let project = usecase
		.create(Project::new(
			name,
			short_description,
			long_description,
			logo_url,
			more_info_url,
			hiring,
			visibility.into(),
			rank,
		))
		.await?;

	let Project {
		id,
		name,
		short_description,
		long_description,
		logo_url,
		more_info_url,
		hiring,
		visibility,
		rank,
	} = project;

	Ok(Json(CreateProjectResponse {
		id: id.into(),
		name,
		slug: String::new(),
		short_description,
		long_description,
		logo_url,
		more_info_url,
		hiring,
		visibility: visibility.into(),
		rank,
	}))
}
