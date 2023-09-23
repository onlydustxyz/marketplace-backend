#[cfg(test)]
use mockall::automock;
#[cfg(test)]
use mockall_double::double;

#[cfg_attr(test, double)]
use crate::AggregateRepository;
use crate::{specifications::Error, AggregateRepositoryError, EventSourcable, Project};

pub struct Specification<A: EventSourcable + 'static> {
	aggregate_repository: AggregateRepository<A>,
}

#[cfg_attr(test, automock)]
impl<A: EventSourcable + 'static> Specification<A> {
	pub fn new(aggregate_repository: AggregateRepository<A>) -> Self {
		Self {
			aggregate_repository,
		}
	}

	pub fn is_satisfied_by(&self, aggregate_id: &A::Id) -> Result<bool, Error> {
		match self.aggregate_repository.find_by_id(aggregate_id) {
			Ok(_) => Ok(true),
			Err(e) => match e {
				AggregateRepositoryError::NotFound => Ok(false),
				AggregateRepositoryError::EventStoreError(_) => Err(Error::EventStore(e)),
			},
		}
	}
}

pub type ProjectExists = Specification<Project>;

#[cfg(test)]
pub type MockProjectExists = MockSpecification<Project>;

#[cfg(test)]
mod tests {
	use anyhow::anyhow;
	use mockall::predicate::eq;
	use rstest::*;
	use uuid::Uuid;

	use super::*;
	#[double]
	use crate::AggregateRepository;
	use crate::{EventStoreError, ProjectId};

	#[fixture]
	fn aggregate_root_repository() -> AggregateRepository<Project> {
		AggregateRepository::default()
	}

	#[fixture]
	#[once]
	fn project_id() -> ProjectId {
		Uuid::new_v4().into()
	}

	#[rstest]
	fn aggregate_exists(
		mut aggregate_root_repository: AggregateRepository<Project>,
		project_id: &ProjectId,
	) {
		aggregate_root_repository
			.expect_find_by_id()
			.with(eq(*project_id))
			.once()
			.returning(|_| Ok(Default::default()));

		let result = Specification::new(aggregate_root_repository).is_satisfied_by(project_id);
		assert!(result.is_ok(), "{}", result.err().unwrap());
		assert!(result.unwrap());
	}

	#[rstest]
	fn aggregate_does_not_exists(
		mut aggregate_root_repository: AggregateRepository<Project>,
		project_id: &ProjectId,
	) {
		aggregate_root_repository
			.expect_find_by_id()
			.with(eq(*project_id))
			.once()
			.returning(|_| Err(AggregateRepositoryError::NotFound));

		let result = Specification::new(aggregate_root_repository).is_satisfied_by(project_id);
		assert!(result.is_ok(), "{}", result.err().unwrap());
		assert!(!result.unwrap());
	}

	#[rstest]
	fn aggregate_repository_error(
		mut aggregate_root_repository: AggregateRepository<Project>,
		project_id: &ProjectId,
	) {
		aggregate_root_repository
			.expect_find_by_id()
			.with(eq(*project_id))
			.once()
			.returning(|_| {
				Err(AggregateRepositoryError::EventStoreError(
					EventStoreError::Connection(anyhow!("oops")),
				))
			});

		let result = Specification::new(aggregate_root_repository).is_satisfied_by(project_id);
		assert!(result.is_err());
	}
}
