use anyhow::Result;
use rocket::{Build, Rocket};

use crate::{github_indexer::Scheduler, Config};

pub mod cron;
pub mod http;

pub async fn bootstrap(config: Config) -> Result<(Rocket<Build>, Scheduler)> {
	Ok((
		http::bootstrap(config.clone()).await?,
		cron::bootstrap(config)?,
	))
}
