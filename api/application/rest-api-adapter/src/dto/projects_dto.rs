use domain::{sponsor, BudgetId, ProjectId, ProjectVisibility};
use rust_decimal::Decimal;
use serde::{Deserialize, Serialize};
use url::Url;

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PostProjectResponse {
	pub project_id: ProjectId,
	pub budget_id: Option<BudgetId>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PostProjectRequest {
	name: String,
	short_description: String,
	long_description: String,
	telegram_link: Option<Url>,
	logo_url: Option<Url>,
	initial_budget: Option<Allocation>,
	hiring: Option<bool>,
	rank: Option<i32>,
	visibility: Option<ProjectVisibility>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Allocation {
	amount: Decimal,
	currency: String,
	sponsor: Option<sponsor::Id>,
}
