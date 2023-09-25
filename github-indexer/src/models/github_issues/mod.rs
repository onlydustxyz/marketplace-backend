use chrono::NaiveDateTime;
use diesel::Identifiable;
use diesel_json::Json;
use domain::{GithubIssueId, GithubIssueNumber, GithubRepoId, GithubUserId};
use infrastructure::database::{enums::GithubIssueStatus, schema::github_issues};
use serde::{Deserialize, Serialize};

mod repository;

#[derive(
	Debug, Clone, Insertable, AsChangeset, Identifiable, Queryable, Serialize, Deserialize, Model,
)]
pub struct GithubIssue {
	pub id: GithubIssueId,
	pub repo_id: GithubRepoId,
	pub number: GithubIssueNumber,
	pub created_at: NaiveDateTime,
	pub author_id: GithubUserId,
	pub status: GithubIssueStatus,
	pub title: String,
	pub html_url: String,
	pub closed_at: Option<NaiveDateTime>,
	pub assignee_ids: Json<Vec<GithubUserId>>,
	pub comments_count: i64,
}

impl Identifiable for GithubIssue {
	type Id = GithubIssueId;

	fn id(self) -> Self::Id {
		self.id
	}
}

impl From<domain::GithubIssue> for GithubIssue {
	fn from(issue: domain::GithubIssue) -> Self {
		GithubIssue {
			id: issue.id,
			repo_id: issue.repo_id,
			number: issue.number,
			created_at: issue.created_at.naive_utc(),
			author_id: issue.author.id,
			status: issue.status.into(),
			title: issue.title,
			html_url: issue.html_url.to_string(),
			closed_at: issue.closed_at.map(|date| date.naive_utc()),
			assignee_ids: Json::new(issue.assignees.iter().map(|assignee| assignee.id).collect()),
			comments_count: issue.comments_count as i64,
		}
	}
}
