use std::sync::Arc;

use anyhow::Result;
use derive_more::Constructor;
use domain::sponsor;
use infrastructure::database::Repository;
use reqwest::Url;
use tracing::instrument;

use super::Error;
use crate::{domain::ImageStoreService, models::*, presentation::http::dto::NonEmptyTrimmedString};
use crate::port::input::sponsor_port::SponsorUseCasePort;
use crate::port::output::image_storage_port::ImageStoragePort;

#[derive(Constructor)]
pub struct Usecase {
	sponsor_repository: Arc<dyn Repository<Sponsor>>,
	image_storage_port: Arc<dyn ImageStoragePort>,
}

impl SponsorUseCasePort for Usecase {

	#[instrument(skip(self))]
	async fn create(
		&self,
		name: NonEmptyTrimmedString,
		logo_url: Url,
		url: Option<Url>,
	) -> Result<Sponsor, Error> {
		let sponsor_id = sponsor::Id::new();

		let stored_logo_url = self.image_storage_port.store_image_from_url(&logo_url).await?.to_string();

		self.sponsor_repository.insert(Sponsor {
			id: sponsor_id,
			name: name.into(),
			logo_url: stored_logo_url,
			url: url.map(|url| url.to_string()),
		})?;

		Ok(sponsor_id)
	}
}

#[cfg(test)]
mod tests {

	use ::url::Url;
	use anyhow::anyhow;
	use assert_matches::assert_matches;
	use mockall::predicate::eq;
	use rstest::{fixture, rstest};

	use super::*;
	use crate::{
        use_cases::sponsor::test::MockSponsorRepository,
        domain::{ImageStoreServiceError, MockImageStoreService},
	};

	#[fixture]
	fn name() -> NonEmptyTrimmedString {
		NonEmptyTrimmedString::new("name".to_string()).unwrap()
	}

	#[fixture]
	fn logo_url() -> Url {
		Url::parse("http://sponsor.org/image.jpg").unwrap()
	}

	#[fixture]
	fn url() -> Url {
		Url::parse("http://sponsor.org").unwrap()
	}

	#[rstest]
	#[tokio::test]
	async fn test_create(name: NonEmptyTrimmedString, logo_url: Url, url: Url) {
		let mut image_store_service = MockImageStoreService::new();
		image_store_service
			.expect_store_image_from_url()
			.with(eq(logo_url.clone()))
			.once()
			.returning(|_| Ok(Url::parse("http://img-store.com/1234.jpg").unwrap()));

		let mut sponsor_repository = MockSponsorRepository::default();
		sponsor_repository
			.expect_insert()
			.withf(|input| input.logo_url == "http://img-store.com/1234.jpg")
			.once()
			.returning(Ok);

		let usecase = Usecase::new(Arc::new(sponsor_repository), Arc::new(image_store_service));

		usecase.create(name, logo_url, Some(url)).await.unwrap();
	}

	#[rstest]
	#[tokio::test]
	async fn test_create_with_bad_logo_url(name: NonEmptyTrimmedString, logo_url: Url, url: Url) {
		let mut image_store_service = MockImageStoreService::new();
		image_store_service
			.expect_store_image_from_url()
			.with(eq(logo_url.clone()))
			.once()
			.returning(|_| Err(ImageStoreServiceError::NotFound(anyhow!("404"))));

		let mut sponsor_repository = MockSponsorRepository::default();
		sponsor_repository.expect_insert().never();

		let usecase = Usecase::new(Arc::new(sponsor_repository), Arc::new(image_store_service));

		let result = usecase.create(name, logo_url, Some(url)).await;
		assert_matches!(result, Err(Error::ImageStore(_)));
	}
}
