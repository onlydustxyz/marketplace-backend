use std::{sync::Arc, time::Duration};

use anyhow::Result;
use domain::{GithubRepoId, GithubUserId};
use infrastructure::{database, github};
use olog::info;

use crate::{
	domain::{
		controller::Controller,
		indexers::{
			self,
			contributors_projector::ContributorsProjector,
			logged::Logged,
			rate_limited::{self, RateLimited},
		},
	},
	Config,
};

pub struct Scheduler {
	repo_indexing: Controller<GithubRepoId>,
	user_indexing: Controller<GithubUserId>,
}

impl Scheduler {
	pub fn new(config: Config) -> Result<Self> {
		let github: Arc<github::Client> = github::RoundRobinClient::new(config.github)?.into();
		let database = Arc::new(database::Client::new(database::init_pool(config.database)?));

		let single_rate_limit_conf = rate_limited::RateLimitConf::new(
			github.clone(),
			github_single_rate_limit_guard(),
			github_rate_limit_retry_delay(),
		);
		let stream_rate_limit_conf = rate_limited::RateLimitConf::new(
			github.clone(),
			github_stream_rate_limit_guard(),
			github_rate_limit_retry_delay(),
		);

		Ok(Scheduler {
			repo_indexing: Controller::new(
				database.clone(),
				vec![
					Arc::new(
						indexers::repo::new(
							github.clone(),
							database.clone(),
							database.clone(),
							database.clone(),
						)
						.logged()
						.rate_limited(&single_rate_limit_conf),
					),
					Arc::new(
						indexers::issues::new(
							github.clone(),
							database.clone(),
							database.clone(),
							database.clone(),
							ContributorsProjector::new(
								database.clone(),
								database.clone(),
								database.clone(),
								database.clone(),
							),
						)
						.logged()
						.rate_limited(&stream_rate_limit_conf),
					),
					Arc::new(
						indexers::pull_requests::new(
							github.clone(),
							database.clone(),
							Arc::new(
								indexers::pull_request::new(
									github.clone(),
									database.clone(),
									database.clone(),
									database.clone(),
									ContributorsProjector::new(
										database.clone(),
										database.clone(),
										database.clone(),
										database.clone(),
									),
								)
								.logged()
								.rate_limited(&single_rate_limit_conf),
							),
						)
						.logged()
						.rate_limited(&stream_rate_limit_conf),
					),
				],
			),
			user_indexing: Controller::new(
				database.clone(),
				vec![Arc::new(
					indexers::user::new(github, database.clone(), database)
						.logged()
						.rate_limited(&single_rate_limit_conf),
				)],
			),
		})
	}

	pub async fn run_once(&self) -> Result<()> {
		self.repo_indexing.index_all().await?;
		self.user_indexing.index_all().await?;
		Ok(())
	}

	pub async fn run(&self) -> Result<()> {
		loop {
			info!("🎶 Still alive 🎶");
			self.run_once().await?;
			sleep().await;
		}
	}
}

async fn sleep() {
	let seconds = std::env::var("GITHUB_EVENTS_INDEXER_SLEEP_DURATION")
		.unwrap_or_default()
		.parse()
		.unwrap_or(60);

	info!("💤 Sleeping for {seconds} seconds 💤");
	tokio::time::sleep(Duration::from_secs(seconds)).await;
}

fn github_stream_rate_limit_guard() -> usize {
	std::env::var("GITHUB_STREAM_RATE_LIMIT_GUARD")
		.unwrap_or_default()
		.parse()
		.unwrap_or(100)
}

fn github_single_rate_limit_guard() -> usize {
	std::env::var("GITHUB_SINGLE_RATE_LIMIT_GUARD")
		.unwrap_or_default()
		.parse()
		.unwrap_or(10)
}

fn github_rate_limit_retry_delay() -> usize {
	std::env::var("GITHUB_RATE_LIMIT_RETRY_DELAY")
		.unwrap_or_default()
		.parse()
		.unwrap_or(30)
}
