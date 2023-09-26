use std::sync::Arc;

use crate::{
	models::Project,
	ports::{
		input::project_facade::{ProjectFacadePort, Result},
		output::project_storage::ProjectStoragePort,
	},
};

pub struct Usecase {
	project_storage: Arc<dyn ProjectStoragePort>,
}

#[async_trait]
impl ProjectFacadePort for Usecase {
	async fn create(&self, project: Project) -> Result<Project> {
		let project = self.project_storage.save(project)?;

		Ok(project)
	}
}

#[cfg(test)]
mod tests {}
