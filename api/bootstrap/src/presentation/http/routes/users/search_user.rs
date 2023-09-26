use std::sync::Arc;

use http_api_problem::{HttpApiProblem, StatusCode};
use olog::{error, IntoField};
use presentation::http::guards::{ApiKey, Claims};
use rocket::{serde::json::Json, State};
use serde::{Deserialize, Serialize};
use url::Url;

use crate::presentation::http::github_client_pat_factory::GithubClientPatFactory;

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Response {
	pub id: i64,
	pub login: String,
	pub avatar_url: Url,
	pub html_url: Url,
}

impl From<domain::GithubUser> for Response {
	fn from(user: domain::GithubUser) -> Self {
		Self {
			id: user.id.into(),
			login: user.login,
			avatar_url: user.avatar_url,
			html_url: user.html_url,
		}
	}
}
#[allow(clippy::too_many_arguments)]
#[get("/users/search?<query>&<sort>&<order>&<per_page>&<page>")]
pub async fn search_users(
	_api_key: ApiKey,
	claims: Claims,
	query: String,
	sort: Option<String>,
	order: Option<String>,
	per_page: Option<i32>,
	page: Option<i32>,
	github_client_factory: &State<Arc<GithubClientPatFactory>>,
) -> Result<Json<Vec<Response>>, HttpApiProblem> {
	let users = github_client_factory
		.github_service(claims.github_access_token)?
		.users(
			&query,
			sort,
			order,
			per_page.and_then(|n| u8::try_from(n).ok()),
			page.and_then(|n| u32::try_from(n).ok()),
		)
		.await
		.map(|users| users.into_iter().map(Into::into).collect())
		.map_err(|e| {
			let error_message = String::from("Failed to search users");
			error!(error = e.to_field(), "{error_message}");
			HttpApiProblem::new(StatusCode::INTERNAL_SERVER_ERROR)
				.title(error_message)
				.detail(e.to_string())
		})?;
	Ok(Json(users))
}
