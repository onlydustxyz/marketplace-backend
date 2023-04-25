use std::sync::Arc;

use ::infrastructure::config;
use anyhow::Result;
use dotenv::dotenv;
use dusty_bot::{presentation::http, Config};
use infrastructure::{github, tracing::Tracer};

#[tokio::main]
async fn main() -> Result<()> {
	dotenv().ok();
	let config: Config = config::load("backend/dusty-bot/app.yaml")?;
	let _tracer = Tracer::init(config.tracer(), "dusty-bot")?;

	let github = Arc::new(github::AppClient::new(config.github())?.into());

	http::serve(config.http().clone(), github).await?;

	Ok(())
}

#[cfg(test)]
mod tests {
	use futures::{future::try_join_all, stream::Iter};
	use rstest::*;

	use super::*;

	#[tokio::test]
	#[rstest]
	async fn app() -> Result<()> {
		dotenv().ok();
		let config: Config = config::load("backend/dusty-bot/app.yaml")?;
		let _tracer = Tracer::init(config.tracer(), "dusty-bot")?;

		let github = github::AppClient::new(config.github())?;

		let handles =
			std::iter::from_fn(|| Some(create_issue("od-mocks", "poc-githubapps", &github)))
				.take(100)
				.chain(std::iter::once(create_issue(
					"AnthonyBuisset",
					"apibara",
					&github,
				)));

		try_join_all(handles).await?;
		rate("od-mocks", "poc-githubapps", &github).await?;
		rate("AnthonyBuisset", "apibara", &github).await?;

		// create_issue("od-mocks", "poc-githubapps", &github).await?;
		// create_issue("od-mocks", "poc-githubapps", &github).await?;
		// create_issue("od-mocks", "poc-githubapps", &github).await?;
		// create_issue("od-mocks", "poc-githubapps", &github).await?;
		//create_issue("AnthonyBuisset", "apibara", &github).await?;
		// create_issue("AnthonyBuisset", "apibara", &github).await?;
		// create_issue("AnthonyBuisset", "apibara", &github).await?;
		// create_issue("AnthonyBuisset", "apibara", &github).await?;
		// create_issue("AnthonyBuisset", "apibara", &github).await?;

		Ok(())
	}

	async fn create_issue(owner: &str, name: &str, github: &github::AppClient) -> Result<()> {
		let installation =
			github.octocrab().apps().get_repository_installation(owner, name).await?;
		//println!("{}", serde_json::to_string_pretty(&installation).unwrap());

		let issue = github
			.octocrab()
			.installation(installation.id)
			.issues(owner, name)
			.create("YOOOOOLO")
			.send()
			.await?;

		Ok(())
	}

	async fn rate(owner: &str, name: &str, github: &github::AppClient) -> Result<()> {
		let installation =
			github.octocrab().apps().get_repository_installation(owner, name).await?;

		let rate_limit = github.octocrab().installation(installation.id).ratelimit().get().await?;
		println!("{owner}/{name} {} -> {}", "aaa", rate_limit.rate.used);

		Ok(())
	}
}
