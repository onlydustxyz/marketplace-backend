use anyhow::{Context, Result};
use dotenv::dotenv;
use github_indexer::{presentation::bootstrap, Config};
use infrastructure::{config, tracing::Tracer};
use olog::info;

#[tokio::main]
async fn main() -> Result<()> {
	dotenv().ok();
	let config: Config = config::load("github-indexer/app.yaml")?;
	let _tracer = Tracer::init(config.tracer.clone(), "github-indexer")?;

	let (http_server, _) = bootstrap(config).await.context("App bootstrap")?;

	let _ = http_server.launch().await.context("http server")?;

	info!("👋 Gracefully shut down");

	Ok(())
}
