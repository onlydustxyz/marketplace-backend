mod issue;
mod port;
pub use port::GithubApiPort;
mod pull_request;
mod repo;
mod user;

use thiserror::Error;
#[derive(Debug, Error)]
pub enum Error {}
pub type Result<T> = std::result::Result<T, Error>;
