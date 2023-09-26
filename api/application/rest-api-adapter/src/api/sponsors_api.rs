use std::sync::Arc;
use http_api_problem::HttpApiProblem;
use rocket::{post, State};
use rocket::serde::json::Json;
use presentation::http::guards::ApiKey;
use api_domain::port::input::sponsor_port;
use crate::dto::sponsors_dto::{PostSponsorRequest, PostSponsorResponse};

#[post("/api/v1/sponsors", data = "<request>", format = "application/json")]
pub async fn create_project(
    _api_key: ApiKey,
    request: Json<PostSponsorRequest>,
    usecase: &State<Arc<dyn sponsor_port::SponsorUseCasePort>>,
) -> Result<Json<PostSponsorResponse>, HttpApiProblem> {
    let PostSponsorRequest {
        name,
        logo_url,
        url,
    } = request.into_inner();

    let sponsor_id = usecase.create(name, logo_url, url).await?;

    Ok(Json(PostSponsorResponse { sponsor_id }))
}