use domain::{
	models::{
		commits::Commit,
		issues::Issue,
		pulls::{PullRequest, Review},
		CiChecks, Repository, User,
	},
	ports::output::clean_storage::{CleanStoragePort, Result},
};
use infrastructure::database;

pub struct PostgresCleanStorageAdapter {
	pub postgres_client: database::Client,
}

impl CleanStoragePort for PostgresCleanStorageAdapter {
	fn save_repo(&self, repo: Repository) -> Result<()> {
		todo!()
	}

	fn save_issue(&self, issue: Issue) -> Result<()> {
		todo!()
	}

	fn save_pull_request(
		&self,
		pull_request: PullRequest,
		commits: Vec<Commit>,
		reviews: Vec<Review>,
		closing_issue_ids: Vec<u64>,
		ci_checks: Option<CiChecks>,
	) -> Result<()> {
		todo!()
	}

	fn save_user(&self, user: User) -> Result<()> {
		todo!()
	}
}
