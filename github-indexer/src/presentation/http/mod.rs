mod bootstrap;
pub mod routes;

use std::sync::Arc;

pub use bootstrap::bootstrap;
pub use http::Config;
use infrastructure::{database, github};
use presentation::http;
use rocket::{Build, Rocket};

pub fn serve(
	config: Config,
	database: Arc<database::Client>,
	github: Arc<github::Client>,
) -> Rocket<Build> {
	rocket::custom(http::config::rocket("github-indexer/Rocket.toml"))
		.manage(config)
		.manage(database)
		.manage(github)
		.attach(http::guards::Cors)
		.mount(
			"/indexer",
			routes![
				routes::repo::index,
				routes::issue::index,
				routes::pull_request::index_by_repo_id,
				routes::user::index
			],
		)
}
