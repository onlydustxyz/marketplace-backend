mod issue;
mod port;
mod pull_request;
mod repo;
pub use port::Port as GithubApiPort;
mod user;

use thiserror::Error;
#[derive(Debug, Error)]
pub enum Error {}
pub type Result<T> = std::result::Result<T, Error>;
