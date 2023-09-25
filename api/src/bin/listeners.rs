use anyhow::Result;
use api::{domain::listeners::bootstrap, Config};
use dotenv::dotenv;
use futures::future::try_join_all;
use infrastructure::{config, tracing::Tracer};

#[tokio::main]
async fn main() -> Result<()> {
	dotenv().ok();
	let config: Config = config::load("api/app.yaml")?;
	let _tracer = Tracer::init(config.tracer.clone(), "event-listeners")?;

	try_join_all(bootstrap(config).await?).await?;

	Ok(())
}
