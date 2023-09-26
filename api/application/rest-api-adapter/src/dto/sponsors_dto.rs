use domain::sponsor;
use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PostSponsorRequest{
    pub name: String,
    pub logo_url: String,
    pub url: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PostSponsorResponse {
    pub sponsor_id: sponsor::Id,
}