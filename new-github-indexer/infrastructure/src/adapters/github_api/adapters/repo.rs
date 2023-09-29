use domain::{models::*, ports::output::github_api::*};

use crate::adapters::github_api::Client;

#[async_trait]
impl repo::Port for Client {
	async fn repo_by_id(&self, repo_id: RepositoryId) -> Result<Repository> {
		self.get_as(format!("/repositories/{repo_id}")).await.map_err(Into::into)
	}

	async fn repo_by_owner_name(
		&self,
		repo_owner: String,
		repo_name: String,
	) -> Result<Repository> {
		self.get_as(format!("/repos/{repo_owner}/{repo_name}"))
			.await
			.map_err(Into::into)
	}

	async fn repo_languages_by_id(&self, repo_id: RepositoryId) -> Result<Languages> {
		self.get_as(format!("/repositories/{repo_id}/languages"))
			.await
			.map_err(Into::into)
	}
}
