use super::Result;
use crate::models::*;

#[async_trait]
pub trait Port: Send + Sync {
	async fn repo_by_id(&self, repo_id: RepositoryId) -> Result<Repository>;

	async fn repo_by_owner_name(&self, repo_owner: String, repo_name: String)
	-> Result<Repository>;

	async fn repo_languages_by_id(&self, repo_id: RepositoryId) -> Result<Languages>;
}
