use derive_more::{AsRef, Display, From, Into};
use serde::{Deserialize, Serialize};

#[derive(
	Debug,
	Clone,
	Copy,
	Default,
	Serialize,
	Deserialize,
	PartialEq,
	Eq,
	Display,
	From,
	Into,
	AsRef,
	Hash,
	AsExpression,
	NewtypeToSql,
)]
#[sql_type = "diesel::sql_types::BigInt"]
pub struct GithubRepositoryId(i64);