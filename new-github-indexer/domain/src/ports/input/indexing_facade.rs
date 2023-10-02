use thiserror::Error;

use crate::models::*;

#[derive(Debug, Error)]
pub enum Error {}

pub type Result<T> = std::result::Result<T, Error>;

#[async_trait]
pub trait Port: Send + Sync {
	async fn index_user(&self, user_id: UserId) -> Result<()>;
}
