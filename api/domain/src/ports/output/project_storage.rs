use thiserror::Error;

use crate::models::Project;

#[derive(Debug, Error)]
pub enum Error {}

pub type Result<T> = std::result::Result<T, Error>;

pub trait ProjectStoragePort: Send + Sync {
	fn save(&self, project: Project) -> Result<Project>;
}
