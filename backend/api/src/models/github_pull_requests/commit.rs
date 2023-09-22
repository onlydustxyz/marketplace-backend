use diesel::Identifiable;
use domain::{GithubPullRequestId, GithubUserId};
use infrastructure::database::schema::github_pull_request_commits;
use serde::{Deserialize, Serialize};

#[derive(
	Debug, Clone, Insertable, Identifiable, AsChangeset, Queryable, Serialize, Deserialize, Model,
)]
#[diesel(primary_key(pull_request_id, sha))]
pub struct GithubPullRequestCommit {
	pub sha: String,
	pub pull_request_id: GithubPullRequestId,
	pub html_url: String,
	pub author_id: GithubUserId,
}

impl Identifiable for GithubPullRequestCommit {
	type Id = (GithubPullRequestId, String);

	fn id(self) -> Self::Id {
		(self.pull_request_id, self.sha)
	}
}
