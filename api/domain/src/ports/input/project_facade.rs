use thiserror::Error;

use crate::{models::Project, ports::output::project_storage};

#[derive(Debug, Error)]
pub enum Error {
	#[error(transparent)]
	ProjectStorage(#[from] project_storage::Error),
}

pub type Result<T> = std::result::Result<T, Error>;

#[async_trait]
pub trait ProjectFacadePort: Send + Sync {
	async fn create(&self, project: Project) -> Result<Project>;
}
