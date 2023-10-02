use std::sync::Arc;

use derive_new::new;

use crate::{
	models::*,
	ports::{
		input::indexing_facade,
		output::{clean_storage, raw_storage},
	},
};

#[derive(new)]
pub struct Usecase {
	raw_storage: Arc<dyn raw_storage::Port>,
	clean_storage: Arc<dyn clean_storage::Port>,
}

#[derive(Debug, Error)]
pub enum Error {
	#[error(transparent)]
	RawStorage(#[from] raw_storage::Error),
	#[error(transparent)]
	CleanStorage(#[from] clean_storage::Error),
}

type Result<T, E = Error> = std::result::Result<T, E>;

impl Usecase {
	async fn read_user(&self, user_id: UserId) -> Result<indexed::User> {
		let user = self.raw_storage.user_by_id(user_id).await?;
		let social_accounts = self.raw_storage.user_social_accounts_by_id(user_id).await?;
		Ok(indexed::User {
			inner: user,
			social_accounts,
		})
	}
}

#[async_trait]
impl indexing_facade::Port for Usecase {
	async fn index_user(&self, user_id: UserId) -> indexing_facade::Result<()> {
		let user = self.read_user(user_id).await?;
		self.clean_storage.save_user(user)?;

		//TODO: expose data in the exposition storage
		Ok(())
	}
}

#[cfg(test)]
mod tests {
	use clean_storage::MockPort as CleanStoragePort;
	use mockall::predicate::*;
	use raw_storage::MockPort as RawStoragePort;
	use rstest::*;

	use super::*;
	use crate::{ports::input::indexing_facade::Port, usecases::fixtures::*};

	#[rstest]
	async fn index_user() {
		let mut raw_storage = RawStoragePort::new();
		let mut clean_storage = CleanStoragePort::new();

		raw_storage
			.expect_user_by_id()
			.once()
			.with(eq(users::anthony().id))
			.return_once(|_| Ok(users::anthony()));

		raw_storage
			.expect_user_social_accounts_by_id()
			.once()
			.with(eq(users::anthony().id))
			.return_once(|_| Ok(user_social_accounts::anthony()));

		clean_storage
			.expect_save_user()
			.once()
			.with(eq(indexed::User {
				inner: users::anthony(),
				social_accounts: user_social_accounts::anthony(),
			}))
			.return_once(|_| Ok(()));

		Usecase::new(Arc::new(raw_storage), Arc::new(clean_storage))
			.index_user(users::anthony().id)
			.await
			.unwrap();
	}
}
