use anyhow::anyhow;
use diesel::prelude::*;
use itertools::Itertools;
use log::error;
use marketplace_domain::{
	Account, LeadContributorProjection, LeadContributorProjectionRepository,
	LeadContributorProjectionRepositoryError, ProjectId, ProjectionRepository,
	ProjectionRepositoryError,
};
use std::str::FromStr;

use crate::database::{models, schema::lead_contributors::dsl, Client, DatabaseError};

impl ProjectionRepository<LeadContributorProjection> for Client {
	fn clear(&self) -> Result<(), ProjectionRepositoryError> {
		self.clear_table(dsl::lead_contributors)
			.map_err(|e| ProjectionRepositoryError::Infrastructure(e.into()))
	}
}

impl LeadContributorProjectionRepository for Client {
	fn store(
		&self,
		lead_contributor: LeadContributorProjection,
	) -> Result<(), LeadContributorProjectionRepositoryError> {
		let lead_contributor: models::LeadContributor = lead_contributor.into();
		self.insert(dsl::lead_contributors, &lead_contributor).map_err(|e| {
			error!("Failed to insert lead_contributor {lead_contributor:?}: {e}");
			LeadContributorProjectionRepositoryError::from(e)
		})
	}

	fn delete(
		&self,
		project_id: &ProjectId,
		account: &Account,
	) -> Result<(), LeadContributorProjectionRepositoryError> {
		let connection =
			self.connection().map_err(LeadContributorProjectionRepositoryError::from)?;

		diesel::delete(dsl::lead_contributors)
			.filter(dsl::project_id.eq(project_id.to_string()))
			.filter(dsl::contributor_account.eq(account.to_string()))
			.execute(&*connection)
			.map_err(DatabaseError::from)?;

		Ok(())
	}

	fn list_by_project(
		&self,
		project_id: &marketplace_domain::ProjectId,
	) -> Result<Vec<LeadContributorProjection>, LeadContributorProjectionRepositoryError> {
		let connection =
			self.connection().map_err(LeadContributorProjectionRepositoryError::from)?;

		let lead_contributors = dsl::lead_contributors
			.filter(dsl::project_id.eq(project_id.to_string()))
			.load::<models::LeadContributor>(&*connection)
			.map_err(DatabaseError::from)?;

		Ok(lead_contributors.into_iter().map_into().collect())
	}
}

impl From<models::LeadContributor> for LeadContributorProjection {
	fn from(member: models::LeadContributor) -> Self {
		LeadContributorProjection::new(
			member.project_id.parse().unwrap(),
			Account::from_str(member.contributor_account.as_str()).unwrap(),
		)
	}
}

impl From<LeadContributorProjection> for models::LeadContributor {
	fn from(member: LeadContributorProjection) -> Self {
		Self {
			project_id: member.project_id().to_string(),
			contributor_account: member.account().to_string(),
		}
	}
}

impl From<DatabaseError> for LeadContributorProjectionRepositoryError {
	fn from(error: DatabaseError) -> Self {
		match error {
			DatabaseError::Transaction(diesel::result::Error::DatabaseError(kind, _)) => match kind
			{
				diesel::result::DatabaseErrorKind::UniqueViolation =>
					Self::AlreadyExist(anyhow!(error)),
				_ => Self::Infrastructure(anyhow!(error)),
			},
			DatabaseError::Transaction(diesel::result::Error::NotFound) => Self::NotFound,
			_ => Self::Infrastructure(anyhow!(error)),
		}
	}
}
