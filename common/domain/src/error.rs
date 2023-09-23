use thiserror::Error;

use crate::{
	AggregateRepositoryError, BudgetError, GithubServiceError, PaymentError, ProjectError,
	PublisherError,
};

#[derive(Debug, Error)]
pub enum DomainError {
	#[error(transparent)]
	InternalError(anyhow::Error),
	#[error(transparent)]
	InvalidInputs(anyhow::Error),
}

impl From<AggregateRepositoryError> for DomainError {
	fn from(aggregate_root_repository_error: AggregateRepositoryError) -> Self {
		match aggregate_root_repository_error {
			AggregateRepositoryError::NotFound =>
				Self::InvalidInputs(aggregate_root_repository_error.into()),
			AggregateRepositoryError::EventStoreError(e) => Self::InternalError(e.into()),
		}
	}
}

impl From<PublisherError> for DomainError {
	fn from(publisher_error: PublisherError) -> Self {
		Self::InternalError(publisher_error.into())
	}
}

impl From<GithubServiceError> for DomainError {
	fn from(error: GithubServiceError) -> Self {
		match error {
			GithubServiceError::NotFound(_) | GithubServiceError::InvalidInput(_) =>
				Self::InvalidInputs(error.into()),
			GithubServiceError::MissingField(_) | GithubServiceError::Other(_) =>
				Self::InternalError(error.into()),
		}
	}
}

impl From<BudgetError> for DomainError {
	fn from(error: BudgetError) -> Self {
		match error {
			BudgetError::Overspent => Self::InvalidInputs(error.into()),
		}
	}
}

impl From<ProjectError> for DomainError {
	fn from(error: ProjectError) -> Self {
		match error {
			ProjectError::BudgetAlreadyExists
			| ProjectError::LeaderAlreadyAssigned
			| ProjectError::NotLeader
			| ProjectError::GithubRepoAlreadyLinked
			| ProjectError::GithubRepoNotLinked
			| ProjectError::UserAlreadyApplied => Self::InvalidInputs(error.into()),
		}
	}
}

impl From<PaymentError> for DomainError {
	fn from(error: PaymentError) -> Self {
		match error {
			PaymentError::Overspent | PaymentError::NotCancellable | PaymentError::Cancelled =>
				Self::InvalidInputs(error.into()),
		}
	}
}

/// Replace this with Result's `inespect_err` once this becomes a stable feature
pub trait LogErr<F, E>
where
	F: FnOnce(&E),
	E: Sized,
{
	/// Call `f` on T if the Result is a Err(E), or do nothing if the Result is an Ok
	fn log_err(self, f: F) -> Self;
}

impl<F, T, E> LogErr<F, E> for Result<T, E>
where
	F: FnOnce(&E),
	E: Sized,
{
	/// Call `f` on T if the Result is a Err(E), or do nothing if the Result is an Ok
	fn log_err(self, f: F) -> Self {
		if let Err(e) = self.as_ref() {
			(f)(e);
		}

		self
	}
}
