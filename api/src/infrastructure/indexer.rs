use anyhow::Result;
use domain::*;
use infrastructure::http;

use crate::domain::services::indexer;

#[async_trait]
impl indexer::Service for http::Client {
	async fn index_repo(&self, repo_id: GithubRepoId) -> Result<()> {
		self.post(format!("repo/{repo_id}")).await
	}

	async fn index_user(&self, user_id: GithubUserId) -> Result<()> {
		self.post(format!("user/{user_id}")).await
	}

	async fn index_issue(
		&self,
		repo_id: GithubRepoId,
		issue_number: GithubIssueNumber,
	) -> Result<()> {
		self.post(format!("repo/{repo_id}/issue/{issue_number}")).await
	}

	async fn index_pull_request_by_repo_id(
		&self,
		repo_id: GithubRepoId,
		pr_number: GithubPullRequestNumber,
	) -> Result<()> {
		self.post(format!("repo/{repo_id}/pull_request/{pr_number}")).await
	}

	async fn index_pull_request_by_repo_owner_name(
		&self,
		repo_owner: String,
		repo_name: String,
		pr_number: GithubPullRequestNumber,
	) -> Result<()> {
		self.post(format!(
			"repo/{repo_owner}/{repo_name}/pull_request/{pr_number}"
		))
		.await
	}
}
