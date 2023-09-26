use domain::Currency;
use rust_decimal::Decimal;
use url::Url;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CreateProjectRequest {
	pub name: String,
	pub short_description: String,
	pub long_description: String,
	pub logo_url: Option<Url>,
	pub more_info_url: Option<Url>,
	pub hiring: bool,
	pub visibility: ProjectVisibility,
	pub rank: Option<i32>,
	pub repos: Vec<u64>,
	pub leaders: Vec<Uuid>,
	pub sponsors: Vec<Uuid>,
	pub budget_allocations: Vec<Money>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CreateProjectResponse {
	pub id: Uuid,
	pub slug: String,
	pub name: String,
	pub short_description: String,
	pub long_description: String,
	pub logo_url: Option<Url>,
	pub more_info_url: Option<Url>,
	pub hiring: bool,
	pub visibility: ProjectVisibility,
	pub rank: i32,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
pub enum ProjectVisibility {
	Public,
	Private,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Money {
	amount: Decimal,
	currency: &'static Currency,
}

impl From<ProjectVisibility> for api_domain::models::ProjectVisibility {
	fn from(value: ProjectVisibility) -> Self {
		match value {
			ProjectVisibility::Public => Self::Public,
			ProjectVisibility::Private => Self::Private,
		}
	}
}

impl From<api_domain::models::ProjectVisibility> for ProjectVisibility {
	fn from(value: api_domain::models::ProjectVisibility) -> Self {
		match value {
			api_domain::models::ProjectVisibility::Public => Self::Public,
			api_domain::models::ProjectVisibility::Private => Self::Private,
		}
	}
}
