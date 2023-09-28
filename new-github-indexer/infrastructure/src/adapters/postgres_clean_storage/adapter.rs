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
	fn save_repo(&self, _repo: Repository) -> Result<()> {
		todo!()
	}

	fn save_issue(&self, _issue: Issue) -> Result<()> {
		todo!()
	}

	fn save_pull_request(
		&self,
		_pull_request: PullRequest,
		_commits: Vec<Commit>,
		_reviews: Vec<Review>,
		_closing_issue_ids: Vec<u64>,
		_ci_checks: Option<CiChecks>,
	) -> Result<()> {
		todo!()
	}

	fn save_user(&self, _user: User) -> Result<()> {
		todo!()
	}
}
