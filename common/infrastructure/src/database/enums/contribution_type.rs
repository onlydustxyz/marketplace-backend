use std::fmt::Display;

use diesel_derive_enum::DbEnum;
use serde::{Deserialize, Serialize};

#[derive(Clone, Copy, Debug, PartialEq, Eq, Serialize, Hash, Deserialize, DbEnum)]
#[ExistingTypePath = "crate::database::schema::sql_types::ContributionType"]
#[DbValueStyle = "SCREAMING_SNAKE_CASE"]
pub enum ContributionType {
	Issue,
	PullRequest,
	CodeReview,
}

impl Display for ContributionType {
	fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
		write!(
			f,
			"{}",
			match self {
				ContributionType::Issue => "ISSUE",
				ContributionType::PullRequest => "PULL_REQUEST",
				ContributionType::CodeReview => "CODE_REVIEW",
			}
		)
	}
}
