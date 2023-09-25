use anyhow::Result;
use rocket::{Build, Rocket};
use tokio::task::JoinHandle;

use crate::Config;

pub mod event_listeners;
pub mod graphql;
pub mod http;

pub async fn bootstrap(config: Config) -> Result<(Rocket<Build>, Vec<JoinHandle<()>>)> {
	Ok((
		http::bootstrap(config.clone()).await?,
		event_listeners::bootstrap(config).await?,
	))
}
