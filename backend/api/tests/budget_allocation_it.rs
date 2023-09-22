mod context;
mod models;

use anyhow::Result;
use api::{models as api_models, presentation::http::routes::projects::budgets::Response};
use domain::{currencies, sponsor, BudgetEvent, BudgetId, Event, ProjectEvent, ProjectId};
use infrastructure::{
	database::{enums::Currency, ImmutableRepository},
	event_bus::EXCHANGE_NAME,
};
use olog::info;
use rocket::{
	http::{ContentType, Status},
	serde::json::json,
};
use rstest::rstest;
use rust_decimal_macros::dec;
use testcontainers::clients::Cli;

use crate::context::{docker, utils::api_key_header, Context};

#[macro_use]
extern crate diesel;

#[rstest]
#[tokio::test(flavor = "multi_thread")]
pub async fn budget_allocation(docker: &'static Cli) {
	let mut test = Test {
		context: Context::new(docker).await.expect("Unable to create test context"),
	};

	test.should_create_a_budget_upon_allocation()
		.await
		.expect("should_create_a_budget_upon_allocation");

	test.should_not_recreate_the_budget_upon_reallocation()
		.await
		.expect("should_not_recreate_the_budget_upon_reallocation");

	test.should_allow_multiple_currencies()
		.await
		.expect("should_allow_multiple_currencies");

	test.should_prevent_allocating_with_non_existing_sponsor()
		.await
		.expect("should_prevent_allocating_with_non_existing_sponsor");
}

struct Test<'a> {
	context: Context<'a>,
}

impl<'a> Test<'a> {
	async fn should_create_a_budget_upon_allocation(&mut self) -> Result<()> {
		info!("should_create_a_budget_upon_allocation");

		// Given
		let project_id = ProjectId::new();
		let sponsor_id = sponsor::Id::new();

		self.context
			.publish(vec![ProjectEvent::Created { id: project_id }.into()])
			.await?;

		self.context.database.client.insert(api_models::Sponsor {
			id: sponsor_id,
			..Default::default()
		})?;

		let request = json!({
			"amount": 1523,
			"currency": "USD",
			"sponsor": sponsor_id
		});

		// When
		let response = self
			.context
			.http_client
			.put(format!("/api/projects/{project_id}/budgets"))
			.header(ContentType::JSON)
			.header(api_key_header())
			.body(request.to_string())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Ok,
			"{}",
			response.into_string().await.unwrap()
		);

		let response: Response = response.into_json().await.unwrap();

		let budget_id = response.budget_id;

		assert_eq!(
			Event::Project(ProjectEvent::BudgetLinked {
				id: project_id,
				budget_id,
				currency: currencies::USD
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		assert_eq!(
			Event::Budget(BudgetEvent::Created {
				id: budget_id,
				currency: currencies::USD
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		assert_eq!(
			Event::Budget(BudgetEvent::Allocated {
				id: budget_id,
				amount: dec!(1523),
				sponsor_id: Some(sponsor_id)
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		assert_eq!(
			vec![api_models::Budget {
				id: budget_id,
				currency: Currency::Usd,
				initial_amount: dec!(1523),
				remaining_amount: dec!(1523)
			}],
			self.context.database.client.list().unwrap()
		);

		Ok(())
	}

	async fn should_not_recreate_the_budget_upon_reallocation(&mut self) -> Result<()> {
		info!("should_not_recreate_the_budget_upon_reallocation");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();

		self.context
			.publish(vec![
				ProjectEvent::Created { id: project_id }.into(),
				ProjectEvent::BudgetLinked {
					id: project_id,
					budget_id,
					currency: currencies::USD,
				}
				.into(),
				BudgetEvent::Created {
					id: budget_id,
					currency: currencies::USD,
				}
				.into(),
				BudgetEvent::Allocated {
					id: budget_id,
					amount: dec!(1_000),
					sponsor_id: None,
				}
				.into(),
			])
			.await?;

		let request = json!({
			"amount":523,
			"currency": "USD"
		});

		// When
		let response = self
			.context
			.http_client
			.put(format!("/api/projects/{project_id}/budgets"))
			.header(ContentType::JSON)
			.header(api_key_header())
			.body(request.to_string())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Ok,
			"{}",
			response.into_string().await.unwrap()
		);

		assert_eq!(
			Event::Budget(BudgetEvent::Allocated {
				id: budget_id,
				amount: dec!(523),
				sponsor_id: None
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		Ok(())
	}

	async fn should_allow_multiple_currencies(&mut self) -> Result<()> {
		info!("should_allow_multiple_currencies");

		// Given
		let project_id = ProjectId::new();
		let usd_budget_id = BudgetId::new();

		self.context
			.publish(vec![
				ProjectEvent::Created { id: project_id }.into(),
				ProjectEvent::BudgetLinked {
					id: project_id,
					budget_id: usd_budget_id,
					currency: currencies::USD,
				}
				.into(),
				BudgetEvent::Created {
					id: usd_budget_id,
					currency: currencies::USD,
				}
				.into(),
				BudgetEvent::Allocated {
					id: usd_budget_id,
					amount: dec!(1_000),
					sponsor_id: None,
				}
				.into(),
			])
			.await?;

		let request = json!({
			"amount": 1,
			"currency": "ETH"
		});

		// When
		let response = self
			.context
			.http_client
			.put(format!("/api/projects/{project_id}/budgets"))
			.header(ContentType::JSON)
			.header(api_key_header())
			.body(request.to_string())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Ok,
			"{}",
			response.into_string().await.unwrap()
		);

		let response: Response = response.into_json().await.unwrap();
		let eth_budget_id = response.budget_id;

		assert_eq!(
			Event::Project(ProjectEvent::BudgetLinked {
				id: project_id,
				budget_id: eth_budget_id,
				currency: currencies::ETH
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		assert_eq!(
			Event::Budget(BudgetEvent::Created {
				id: eth_budget_id,
				currency: currencies::ETH
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		assert_eq!(
			Event::Budget(BudgetEvent::Allocated {
				id: eth_budget_id,
				amount: dec!(1),
				sponsor_id: None
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		Ok(())
	}

	async fn should_prevent_allocating_with_non_existing_sponsor(&mut self) -> Result<()> {
		info!("should_prevent_allocating_with_non_existing_sponsor");

		// Given
		let project_id = ProjectId::new();
		let sponsor_id = sponsor::Id::new();

		self.context
			.publish(vec![ProjectEvent::Created { id: project_id }.into()])
			.await?;

		let request = json!({
			"amount": 1523,
			"currency": "USD",
			"sponsor": sponsor_id
		});

		// When
		let response = self
			.context
			.http_client
			.put(format!("/api/projects/{project_id}/budgets"))
			.header(ContentType::JSON)
			.header(api_key_header())
			.body(request.to_string())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::BadRequest,
			"{}",
			response.into_string().await.unwrap()
		);

		Ok(())
	}
}
