use domain::DomainError;
use http_api_problem::{HttpApiProblem, StatusCode};
use olog::IntoField;
use presentation::http::guards::ApiKey;
use rocket::{post, serde::json::Json};

use crate::dto::projects_dto::{PostProjectRequest, PostProjectResponse};
//
// #[post("/api/v1/projects", data = "<request>", format = "application/json")]
// pub async fn create_project(
// 	_api_key: ApiKey,
// 	request: Json<PostProjectRequest>,
// 	usecase: application::project::create::Usecase,
// ) -> Result<Json<PostProjectResponse>, HttpApiProblem> {
// 	let Request {
// 		name,
// 		short_description,
// 		long_description,
// 		telegram_link,
// 		logo_url,
// 		initial_budget,
// 		hiring,
// 		rank,
// 		visibility,
// 	} = request.into_inner();
//
// 	let (initial_budget, sponsor_id) = match initial_budget {
// 		Some(initial_budget) => {
// 			let (budget, sponsor_id) = initial_budget.try_into()?;
// 			(Some(budget), sponsor_id)
// 		},
// 		None => (None, None),
// 	};
//
// 	let (project_id, budget_id) = usecase
// 		.create(
// 			name.try_into().map_err(|e: DomainError| {
// 				HttpApiProblem::new(StatusCode::BAD_REQUEST)
// 					.title("Unable to read project_name")
// 					.detail(e.to_string())
// 			})?,
// 			short_description.try_into().map_err(|e: DomainError| {
// 				HttpApiProblem::new(StatusCode::BAD_REQUEST)
// 					.title("Unable to read short_description")
// 					.detail(e.to_string())
// 			})?,
// 			long_description.try_into().map_err(|e: DomainError| {
// 				HttpApiProblem::new(StatusCode::BAD_REQUEST)
// 					.title("Unable to read long_description")
// 					.detail(e.to_string())
// 			})?,
// 			telegram_link,
// 			logo_url,
// 			initial_budget,
// 			sponsor_id,
// 			hiring.unwrap_or_default(),
// 			rank.unwrap_or_default(),
// 			visibility.unwrap_or_default(),
// 		)
// 		.await
// 		.map_err(|e| {
// 			olog::error!(
// 				error = e.to_field(),
// 				"Unable to process create_project request"
// 			);
// 			HttpApiProblem::new(StatusCode::INTERNAL_SERVER_ERROR)
// 				.title("Unable to process create_project request")
// 				.detail(e.to_string())
// 		})?;
// 	Ok(Json(PostProjectResponse {
// 		project_id,
// 		budget_id,
// 	}))
// }
