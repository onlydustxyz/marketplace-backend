use std::{sync::Arc, time::Duration};

use anyhow::Result;
use domain::currencies;
use infrastructure::{coinmarketcap, database};
use olog::info;
use tokio::time::Instant;
use tokio_cron_scheduler::Job;

use crate::{application::quotes::sync::Usecase, Config};

pub async fn bootstrap(config: Config) -> Result<Job> {
	let job = Job::new_repeated_async(sleep_duration(), move |_id, _lock| {
		let cloned_config = config.clone();
		Box::pin(async move { _bootstrap(cloned_config.clone()).await.unwrap() })
	})?;

	Ok(job)
}

async fn _bootstrap(config: Config) -> Result<()> {
	let database = Arc::new(database::Client::new(database::init_pool(
		config.database.clone(),
	)?));

	let coinmarketcap = Arc::new(coinmarketcap::Client::new(
		config.coinmarketcap,
		currencies::USD,
	));

	let start = Instant::now();

	let count = Usecase::new(database, coinmarketcap).sync_quotes().await?;

	info!(
		duration = start.elapsed().as_secs(),
		count = count,
		"💸 Crypto currencies prices synced"
	);

	Ok(())
}

fn sleep_duration() -> Duration {
	let secs = std::env::var("QUOTES_SYNCER_SLEEP_DURATION")
		.ok()
		.and_then(|secs| secs.parse().ok())
		.unwrap_or(60);
	Duration::from_secs(secs)
}