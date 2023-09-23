mod fetch;
pub use fetch::{
	IssueService as FetchIssueService, PullRequestService as FetchPullRequestService,
	RepoService as FetchRepoService, Service as FetchService, UserService as FetchUserService,
};

use crate::SubscriberCallbackError;
mod search;
pub use search::{Service as SearchService, UserService as SearchUserService};

pub mod filters;
pub use filters::{IssueFilters, PullRequestFilters};
use thiserror::Error;

#[derive(Debug, Error)]
pub enum Error {
	#[error("Not found")]
	NotFound(#[source] anyhow::Error),
	#[error("Invalid input")]
	InvalidInput(#[source] anyhow::Error),
	#[error("Field '{0}' is not present")]
	MissingField(String),
	#[error("Internal error")]
	Other(#[source] anyhow::Error),
}

impl From<Error> for SubscriberCallbackError {
	fn from(error: Error) -> Self {
		match error {
			Error::NotFound(_) | Error::MissingField(_) | Error::InvalidInput(_) =>
				Self::Discard(error.into()),
			Error::Other(_) => Self::Fatal(error.into()),
		}
	}
}

pub type Result<T> = std::result::Result<T, Error>;

pub trait Service: FetchService + SearchService {}

impl<S: FetchService + SearchService> Service for S {}
