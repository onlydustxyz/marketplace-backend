pub use anyhow::Result;

use crate::models::*;

#[async_trait]
pub trait Port: Send + Sync {
	async fn index_user(&self, user_id: UserId) -> Result<()>;

	async fn index_issue(
		&self,
		repo_owner: String,
		repo_name: String,
		issue_number: u64,
	) -> Result<()>;
}
