use anyhow::Result;

use crate::{github_indexer::Scheduler, Config};

pub fn bootstrap(config: Config) -> Result<Scheduler> {
	Scheduler::new(config)
}
