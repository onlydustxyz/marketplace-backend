pub use anyhow::Result;

use crate::models::*;

#[async_trait]
pub trait Port: Send + Sync {
	async fn index_user(&self, user_id: UserId) -> Result<()>;
}
