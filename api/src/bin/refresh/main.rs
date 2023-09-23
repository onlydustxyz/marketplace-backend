use std::sync::Arc;

use ::infrastructure::config;
use anyhow::{anyhow, Result};
use api::Config;
use clap::Parser;
use domain::{Application, Budget, Payment, Project};
use dotenv::dotenv;
use futures::future::try_join_all;
use infrastructure::{database, tracing::Tracer};

mod refresher;
use refresher::{Registrable, Registry};

mod cli;

#[tokio::main]
async fn main() -> Result<()> {
	dotenv().ok();
	let config: Config = config::load("event-listeners/src/bin/refresh/app.yaml")?;
	let _tracer = Tracer::init(config.tracer, "refresh")?;
	let database = Arc::new(database::Client::new(database::init_pool(config.database)?));

	let mut registry = Registry::new();

	refresher::create::<Application>(database.clone()).register(&mut registry, "Application")?;
	refresher::create::<Budget>(database.clone()).register(&mut registry, "Budget")?;
	refresher::create::<Project>(database.clone()).register(&mut registry, "Project")?;
	refresher::create::<Payment>(database.clone()).register(&mut registry, "Payment")?;

	let cli::Args {
		name: aggregate_name,
		id: aggregate_ids,
		all: all_ids,
	} = cli::Args::parse();

	let refresher = registry.get(&aggregate_name).ok_or_else(|| anyhow!("Aggregate not found"))?;

	let aggregate_ids = match all_ids {
		true => refresher.all_ids()?,
		false => aggregate_ids,
	};

	let handles = aggregate_ids.iter().map(|id| refresher.refresh(id));

	try_join_all(handles).await?;

	Ok(())
}
