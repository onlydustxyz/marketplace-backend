mod repository;
use diesel::Identifiable;
use domain::GithubRepoId;
use infrastructure::database::schema::github_repo_indexes;
pub use repository::Repository;
use serde::{Deserialize, Serialize};
use serde_json::Value;

#[derive(
	Debug,
	Default,
	Clone,
	Insertable,
	AsChangeset,
	Identifiable,
	Queryable,
	Serialize,
	Deserialize,
	Model,
)]
#[diesel(table_name = github_repo_indexes, primary_key(repo_id))]
pub struct GithubRepoIndex {
	pub repo_id: GithubRepoId,
	pub repo_indexer_state: Option<Value>,
	pub issues_indexer_state: Option<Value>,
}

impl Identifiable for GithubRepoIndex {
	type Id = GithubRepoId;

	fn id(self) -> Self::Id {
		self.repo_id
	}
}