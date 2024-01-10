mod context;
mod models;

use std::str::FromStr;

use anyhow::Result;
use api::presentation::http::routes::payment;
use assert_matches::assert_matches;
use chrono::{Duration, Utc};
use domain::{
	blockchain::evm, currencies, Amount, BudgetEvent, BudgetId, Event, GithubPullRequestId,
	GithubPullRequestNumber, GithubRepoId, GithubUserId, PaymentEvent, PaymentId, PaymentReason,
	PaymentReceipt, PaymentWorkItem, ProjectEvent, ProjectId, UserId,
};
use infrastructure::event_bus::EXCHANGE_NAME;
use olog::info;
use rocket::{
	http::{ContentType, Header, Status},
	serde::json::json,
};
use rstest::rstest;
use rust_decimal::Decimal;
use rust_decimal_macros::dec;
use testcontainers::clients::Cli;
use uuid::Uuid;

use crate::context::{
	docker,
	utils::{api_key_header, USER_ID},
	Context,
};

#[macro_use]
extern crate diesel;

#[rstest]
#[tokio::test(flavor = "multi_thread")]
pub async fn payment_processing(docker: &'static Cli) {
	let mut test = Test {
		context: Context::new(docker).await.expect("Unable to create test context"),
	};

	test.project_lead_can_request_payments()
		.await
		.expect("project_lead_can_request_payments");
	test.project_lead_can_request_payments_in_eth()
		.await
		.expect("project_lead_can_request_payments_in_eth");
	test.project_lead_can_request_payments_in_lords()
		.await
		.expect("project_lead_can_request_payments_in_lords");
	test.project_lead_can_request_payments_in_usdc()
		.await
		.expect("project_lead_can_request_payments_in_usdc");
	test.cannot_request_payments_without_api_key()
		.await
		.expect("cannot_request_payments_without_api_key");
	test.project_lead_can_cancel_payments()
		.await
		.expect("project_lead_can_cancel_payments");
	test.admin_can_cancel_payments().await.expect("admin_can_cancel_payments");
	test.cannot_cancel_payments_without_api_key()
		.await
		.expect("cannot_cancel_payments_without_api_key");

	test.admin_can_add_a_sepa_receipt().await.expect("admin_can_add_a_sepa_receipt");
	test.admin_can_add_an_eth_receipt().await.expect("admin_can_add_an_eth_receipt");
	test.admin_can_add_a_stark_receipt()
		.await
		.expect("admin_can_add_a_stark_receipt");
	test.admin_can_add_a_lords_receipt()
		.await
		.expect("admin_can_add_a_lords_receipt");
	test.admin_can_add_a_usdc_receipt().await.expect("admin_can_add_a_usdc_receipt");

	test.recipient_can_mark_invoice_as_received()
		.await
		.expect("recipient_can_mark_invoice_as_received");
}

struct Test<'a> {
	context: Context<'a>,
}

impl<'a> Test<'a> {
	async fn project_lead_can_request_payments(&mut self) -> Result<()> {
		info!("project_lead_can_request_payments");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let before = Utc::now().naive_utc();

		self.context
			.event_publisher
			.publish_many(&[
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
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
			])
			.await?;

		let request = json!({
			"projectId": project_id,
			"recipientId": 595505,
			"requestorId": USER_ID,
			"amount": 10,
			"currency": "USD",
			"hoursWorked": 1,
			"reason": {
				"workItems": [{
					"type": "PULL_REQUEST",
					"id": "1012167246",
					"repoId": 498695724,
					"number": 111
				}
			]}
		});

		// When
		let response = self
			.context
			.http_client
			.post("/api/payments")
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
			response.into_string().await.unwrap_or_default()
		);
		let response: payment::request::Response = response.into_json().await.unwrap();

		let payment_id: PaymentId = response.payment_id;

		let after = Utc::now().naive_utc();

		assert_eq!(
			Event::Budget(BudgetEvent::Spent {
				id: budget_id,
				amount: dec!(10)
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		assert_matches!(
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
			Event::Payment(event) => {
				assert_matches!(event, PaymentEvent::Requested {
					id,
					project_id: project_id_,
					requestor_id,
					recipient_id,
					amount,
					duration_worked,
					reason,
					requested_at
				} => {
					assert_eq!(id, payment_id);
					assert_eq!(project_id_, project_id);
					assert_eq!(requestor_id, Uuid::from_str("9b7effeb-963f-4ac4-be74-d735501925ed").unwrap().into());
					assert_eq!(recipient_id,  GithubUserId::from(595505u64));
					assert_eq!(amount, Amount::from_decimal(
						Decimal::from(10),
						currencies::USD
					));
					assert_eq!(duration_worked, Some(Duration::hours(1)));
					assert_eq!(reason, PaymentReason {
						work_items: vec![PaymentWorkItem::PullRequest {
							id: GithubPullRequestId::from(1012167246u64),
							repo_id: GithubRepoId::from(498695724u64),
							number: GithubPullRequestNumber::from(111u64)
						}]
					});

					assert!(requested_at > before);
					assert!(requested_at < after);
				});
			}
		);

		Ok(())
	}

	async fn project_lead_can_request_payments_in_eth(&mut self) -> Result<()> {
		info!("project_lead_can_request_payments_in_eth");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let before = Utc::now().naive_utc();

		self.context
			.event_publisher
			.publish_many(&[
				ProjectEvent::Created { id: project_id }.into(),
				ProjectEvent::BudgetLinked {
					id: project_id,
					budget_id,
					currency: currencies::ETH,
				}
				.into(),
				BudgetEvent::Created {
					id: budget_id,
					currency: currencies::ETH,
				}
				.into(),
				BudgetEvent::Allocated {
					id: budget_id,
					amount: Decimal::from(1),
					sponsor_id: None,
				}
				.into(),
			])
			.await?;

		let request = json!({
			"projectId": project_id,
			"recipientId": 595505,
			"requestorId": USER_ID,
			"amount": 0.00001,
			"currency": "ETH",
			"reason": {
				"workItems": [{
					"type": "PULL_REQUEST",
					"id": "1012167246",
					"repoId": 498695724,
					"number": 111
				}
			]}
		});

		// When
		let response = self
			.context
			.http_client
			.post("/api/payments")
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
			response.into_string().await.unwrap_or_default()
		);
		let response: payment::request::Response = response.into_json().await.unwrap();

		let payment_id: PaymentId = response.payment_id;

		let after = Utc::now().naive_utc();

		assert_eq!(
			Event::Budget(BudgetEvent::Spent {
				id: budget_id,
				amount: dec!(0.00001)
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		assert_matches!(
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
			Event::Payment(event) => {
				assert_matches!(event, PaymentEvent::Requested {
					id,
					project_id: project_id_,
					requestor_id,
					recipient_id,
					amount,
					duration_worked,
					reason,
					requested_at
				} => {
					assert_eq!(id, payment_id);
					assert_eq!(project_id_, project_id);
					assert_eq!(requestor_id, Uuid::from_str("9b7effeb-963f-4ac4-be74-d735501925ed").unwrap().into());
					assert_eq!(recipient_id,  GithubUserId::from(595505u64));
					assert_eq!(amount, Amount::from_decimal(
						Decimal::from_str("0.00001").unwrap(),
						currencies::ETH
					));
					assert_eq!(duration_worked, None);
					assert_eq!(reason, PaymentReason {
						work_items: vec![PaymentWorkItem::PullRequest {
							id: GithubPullRequestId::from(1012167246u64),
							repo_id: GithubRepoId::from(498695724u64),
							number: GithubPullRequestNumber::from(111u64)
						}]
					});

					assert!(requested_at > before);
					assert!(requested_at < after);
				});
			}
		);

		Ok(())
	}

	async fn project_lead_can_request_payments_in_lords(&mut self) -> Result<()> {
		info!("project_lead_can_request_payments_in_lords");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let before = Utc::now().naive_utc();

		self.context
			.event_publisher
			.publish_many(&[
				ProjectEvent::Created { id: project_id }.into(),
				ProjectEvent::BudgetLinked {
					id: project_id,
					budget_id,
					currency: currencies::LORDS,
				}
				.into(),
				BudgetEvent::Created {
					id: budget_id,
					currency: currencies::LORDS,
				}
				.into(),
				BudgetEvent::Allocated {
					id: budget_id,
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
			])
			.await?;

		let request = json!({
			"projectId": project_id,
			"recipientId": 595505,
			"requestorId": USER_ID,
			"amount": 100.52,
			"currency": "LORDS",
			"reason": {
				"workItems": [{
					"type": "PULL_REQUEST",
					"id": "1012167246",
					"repoId": 498695724,
					"number": 111
				}
			]}
		});

		// When
		let response = self
			.context
			.http_client
			.post("/api/payments")
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
			response.into_string().await.unwrap_or_default()
		);
		let response: payment::request::Response = response.into_json().await.unwrap();

		let payment_id: PaymentId = response.payment_id;

		let after = Utc::now().naive_utc();

		assert_eq!(
			Event::Budget(BudgetEvent::Spent {
				id: budget_id,
				amount: dec!(100.52)
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		assert_matches!(
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
			Event::Payment(event) => {
				assert_matches!(event, PaymentEvent::Requested {
					id,
					project_id: project_id_,
					requestor_id,
					recipient_id,
					amount,
					duration_worked,
					reason,
					requested_at
				} => {
					assert_eq!(id, payment_id);
					assert_eq!(project_id_, project_id);
					assert_eq!(requestor_id,
		Uuid::from_str("9b7effeb-963f-4ac4-be74-d735501925ed").unwrap().into()); 			assert_eq!
		(recipient_id,  GithubUserId::from(595505u64)); 			assert_eq!(amount,
		Amount::from_decimal(dec!(100.52),currencies::LORDS)); 			assert_eq!(duration_worked, None);
					assert_eq!(reason, PaymentReason {
						work_items: vec![PaymentWorkItem::PullRequest {
							id: GithubPullRequestId::from(1012167246u64),
							repo_id: GithubRepoId::from(498695724u64),
							number: GithubPullRequestNumber::from(111u64)
						}]
					});

					assert!(requested_at > before);
					assert!(requested_at < after);
				});
			}
		);

		Ok(())
	}

	async fn project_lead_can_request_payments_in_usdc(&mut self) -> Result<()> {
		info!("project_lead_can_request_payments_in_usdc");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let before = Utc::now().naive_utc();

		self.context
			.event_publisher
			.publish_many(&[
				ProjectEvent::Created { id: project_id }.into(),
				ProjectEvent::BudgetLinked {
					id: project_id,
					budget_id,
					currency: currencies::USDC,
				}
				.into(),
				BudgetEvent::Created {
					id: budget_id,
					currency: currencies::USDC,
				}
				.into(),
				BudgetEvent::Allocated {
					id: budget_id,
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
			])
			.await?;

		let request = json!({
			"projectId": project_id,
			"recipientId": 595505,
			"requestorId": USER_ID,
			"amount": 100.52,
			"currency": "USDC",
			"reason": {
				"workItems": [{
					"type": "PULL_REQUEST",
					"id": "1012167246",
					"repoId": 498695724,
					"number": 111
				}
			]}
		});

		// When
		let response = self
			.context
			.http_client
			.post("/api/payments")
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
			response.into_string().await.unwrap_or_default()
		);
		let response: payment::request::Response = response.into_json().await.unwrap();

		let payment_id: PaymentId = response.payment_id;

		let after = Utc::now().naive_utc();

		assert_eq!(
			Event::Budget(BudgetEvent::Spent {
				id: budget_id,
				amount: dec!(100.52)
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		assert_matches!(
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
			Event::Payment(event) => {
				assert_matches!(event, PaymentEvent::Requested {
					id,
					project_id: project_id_,
					requestor_id,
					recipient_id,
					amount,
					duration_worked,
					reason,
					requested_at
				} => {
					assert_eq!(id, payment_id);
					assert_eq!(project_id_, project_id);
					assert_eq!(requestor_id, Uuid::from_str("9b7effeb-963f-4ac4-be74-d735501925ed").unwrap().into());
					assert_eq!(recipient_id,  GithubUserId::from(595505u64));
					assert_eq!(amount, Amount::from_decimal(dec!(100.52),currencies::USDC));
					assert_eq!(duration_worked, None);
					assert_eq!(reason, PaymentReason {
						work_items: vec![PaymentWorkItem::PullRequest {
							id: GithubPullRequestId::from(1012167246u64),
							repo_id: GithubRepoId::from(498695724u64),
							number: GithubPullRequestNumber::from(111u64)
						}]
					});

					assert!(requested_at > before);
					assert!(requested_at < after);
				});
			}
		);

		Ok(())
	}

	async fn cannot_request_payments_without_api_key(&mut self) -> Result<()> {
		info!("cannot_request_payments_without_api_key");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();

		self.context
			.event_publisher
			.publish_many(&[
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
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
			])
			.await?;

		let request = json!({
			"projectId": project_id,
			"recipientId": 595505,
			"requestorId": USER_ID,
			"amount": 10,
			"currency": "USD",
			"hoursWorked": 1,
			"reason": {
				"workItems": [{
					"type": "PULL_REQUEST",
					"id": "1012167246",
					"repoId": 498695724,
					"number": 111
				}
			]}
		});

		// When
		let response = self
			.context
			.http_client
			.post("/api/payments")
			.header(ContentType::JSON)
			.body(request.to_string())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Unauthorized,
			"{}",
			response.into_string().await.unwrap_or_default()
		);

		Ok(())
	}

	async fn project_lead_can_cancel_payments(&mut self) -> Result<()> {
		info!("project_lead_can_cancel_payments");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let payment_id = PaymentId::new();

		self.context
			.event_publisher
			.publish_many(&[
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
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
				PaymentEvent::Requested {
					id: payment_id,
					project_id,
					requestor_id: UserId::new(),
					recipient_id: GithubUserId::from(595505u64),
					amount: Amount::from_decimal(Decimal::from(100), currencies::USD),
					duration_worked: Some(Duration::hours(2)),
					reason: PaymentReason { work_items: vec![] },
					requested_at: Utc::now().naive_utc(),
				}
				.into(),
			])
			.await?;

		// When
		let response = self
			.context
			.http_client
			.delete(format!("/api/payments/{payment_id}"))
			.header(ContentType::JSON)
			.header(api_key_header())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Ok,
			"{}",
			response.into_string().await.unwrap_or_default()
		);

		assert_eq!(
			Event::Payment(PaymentEvent::Cancelled { id: payment_id }),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		assert_eq!(
			Event::Budget(BudgetEvent::Spent {
				id: budget_id,
				amount: dec!(-100)
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		Ok(())
	}

	async fn admin_can_cancel_payments(&mut self) -> Result<()> {
		info!("admin_can_cancel_payments");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let payment_id = PaymentId::new();

		self.context
			.event_publisher
			.publish_many(&[
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
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
				PaymentEvent::Requested {
					id: payment_id,
					project_id,
					requestor_id: UserId::new(),
					recipient_id: GithubUserId::from(595505u64),
					amount: Amount::from_decimal(Decimal::from(100), currencies::USD),
					duration_worked: Some(Duration::hours(2)),
					reason: PaymentReason { work_items: vec![] },
					requested_at: Utc::now().naive_utc(),
				}
				.into(),
			])
			.await?;

		// When
		let response = self
			.context
			.http_client
			.delete(format!("/api/payments/{payment_id}"))
			.header(ContentType::JSON)
			.header(api_key_header())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Ok,
			"{}",
			response.into_string().await.unwrap_or_default()
		);

		assert_eq!(
			Event::Payment(PaymentEvent::Cancelled { id: payment_id }),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		assert_eq!(
			Event::Budget(BudgetEvent::Spent {
				id: budget_id,
				amount: dec!(-100)
			}),
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
		);

		Ok(())
	}

	async fn cannot_cancel_payments_without_api_key(&mut self) -> Result<()> {
		info!("cannot_cancel_payments_without_api_key");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let payment_id = PaymentId::new();

		self.context
			.event_publisher
			.publish_many(&[
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
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
				PaymentEvent::Requested {
					id: payment_id,
					project_id,
					requestor_id: UserId::new(),
					recipient_id: GithubUserId::from(595505u64),
					amount: Amount::from_decimal(Decimal::from(100), currencies::USD),
					duration_worked: Some(Duration::hours(2)),
					reason: PaymentReason { work_items: vec![] },
					requested_at: Utc::now().naive_utc(),
				}
				.into(),
			])
			.await?;

		// When
		let response = self
			.context
			.http_client
			.delete(format!("/api/payments/{payment_id}"))
			.header(ContentType::JSON)
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Unauthorized,
			"{}",
			response.into_string().await.unwrap_or_default()
		);

		Ok(())
	}

	async fn admin_can_add_a_sepa_receipt(&mut self) -> Result<()> {
		info!("admin_can_add_a_sepa_receipt");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let payment_id = PaymentId::new();

		self.context
			.event_publisher
			.publish_many(&[
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
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
				BudgetEvent::Spent {
					id: budget_id,
					amount: Decimal::from(100),
				}
				.into(),
				PaymentEvent::Requested {
					id: payment_id,
					project_id,
					requestor_id: UserId::new(),
					recipient_id: GithubUserId::from(595505u64),
					amount: Amount::from_decimal(Decimal::from(100), currencies::USD),
					duration_worked: Some(Duration::hours(2)),
					reason: PaymentReason { work_items: vec![] },
					requested_at: Utc::now().naive_utc(),
				}
				.into(),
			])
			.await?;

		let request = json!({
			"amount": 100,
			"currency": "USD",
			"recipientIban": "NL82INGB5883930565",
			"transactionReference": "123456",
		});

		let before = Utc::now().naive_utc();

		// When
		let response = self
			.context
			.http_client
			.post(format!("/api/payments/{payment_id}/receipts"))
			.header(ContentType::JSON)
			.header(api_key_header())
			.header(Header::new("x-hasura-role", "admin"))
			.body(request.to_string())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Ok,
			"{}",
			response.into_string().await.unwrap_or_default()
		);

		let after = Utc::now().naive_utc();

		let response: payment::receipts::Response = response.into_json().await.unwrap();

		assert_matches!(
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
			Event::Payment(event) => {
				assert_matches!(event, PaymentEvent::Processed {
					id,
					amount,
					receipt_id,
					receipt,
					processed_at
				} => {
					assert_eq!(id, payment_id);
					assert_eq!(amount, Amount::from_decimal(dec!(100), currencies::USD));
					assert_eq!(receipt_id, response.receipt_id);
					assert_eq!(receipt, PaymentReceipt::Sepa { recipient_iban: "NL82INGB5883930565".parse().unwrap(), transaction_reference: "123456".to_string() });
					assert!(processed_at > before);
					assert!(processed_at < after);
				});
			}
		);

		Ok(())
	}

	async fn admin_can_add_an_eth_receipt(&mut self) -> Result<()> {
		info!("admin_can_add_an_eth_receipt");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let payment_id = PaymentId::new();

		self.context
			.event_publisher
			.publish_many(&[
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
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
				BudgetEvent::Spent {
					id: budget_id,
					amount: Decimal::from(100),
				}
				.into(),
				PaymentEvent::Requested {
					id: payment_id,
					project_id,
					requestor_id: UserId::new(),
					recipient_id: GithubUserId::from(595505u64),
					amount: Amount::from_decimal(Decimal::from(100), currencies::USD),
					duration_worked: Some(Duration::hours(2)),
					reason: PaymentReason { work_items: vec![] },
					requested_at: Utc::now().naive_utc(),
				}
				.into(),
			])
			.await?;

		let request = json!({
			"amount": 100,
			"currency": "USDC",
			"recipientWallet": "vitalik.eth",
			"transactionReference": "0xe81124e94cf8dad83553eb35f1e50821dba16d145d9c8e3cc43d7681c68e4b2b",
		});

		let before = Utc::now().naive_utc();

		// When
		let response = self
			.context
			.http_client
			.post(format!("/api/payments/{payment_id}/receipts"))
			.header(ContentType::JSON)
			.header(api_key_header())
			.header(Header::new("x-hasura-role", "admin"))
			.body(request.to_string())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Ok,
			"{}",
			response.into_string().await.unwrap_or_default()
		);

		let after = Utc::now().naive_utc();

		let response: payment::receipts::Response = response.into_json().await.unwrap();

		assert_matches!(
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
			Event::Payment(event) => {
				assert_matches!(event, PaymentEvent::Processed {
					id,
					amount,
					receipt_id,
					receipt,
					processed_at
				} => {
					assert_eq!(id, payment_id);
					assert_eq!(amount, Amount::from_decimal(dec!(100), currencies::USDC));
					assert_eq!(receipt_id, response.receipt_id);
					assert_eq!(receipt, PaymentReceipt::Ethereum {
						recipient_address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045".parse().unwrap(),
						recipient_ens: Some(evm::Name::new("vitalik.eth".to_string())),
						transaction_hash: "0xe81124e94cf8dad83553eb35f1e50821dba16d145d9c8e3cc43d7681c68e4b2b".parse().unwrap()
					});
					assert!(processed_at > before);
					assert!(processed_at < after);
				});
			}
		);

		Ok(())
	}

	async fn admin_can_add_a_stark_receipt(&mut self) -> Result<()> {
		info!("admin_can_add_a_stark_receipt");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let payment_id = PaymentId::new();

		self.context
			.event_publisher
			.publish_many(&[
				ProjectEvent::Created { id: project_id }.into(),
				ProjectEvent::BudgetLinked {
					id: project_id,
					budget_id,
					currency: currencies::STRK,
				}
				.into(),
				BudgetEvent::Created {
					id: budget_id,
					currency: currencies::STRK,
				}
				.into(),
				BudgetEvent::Allocated {
					id: budget_id,
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
				BudgetEvent::Spent {
					id: budget_id,
					amount: Decimal::from(100),
				}
				.into(),
				PaymentEvent::Requested {
					id: payment_id,
					project_id,
					requestor_id: UserId::new(),
					recipient_id: GithubUserId::from(595505u64),
					amount: Amount::from_decimal(Decimal::from(100), currencies::STRK),
					duration_worked: Some(Duration::hours(2)),
					reason: PaymentReason { work_items: vec![] },
					requested_at: Utc::now().naive_utc(),
				}
				.into(),
			])
			.await?;

		let request = json!({
			"amount": 100,
			"currency": "STRK",
			"recipientWallet": "0x066252b2940ef3522947c7865e7e154c0af37f64380bc50684010d355585605e",
			"transactionReference": "0x02ba0d419826ccdf25fc5068866b4ae5803753cbd4f15c944a0319e455d98803",
		});

		let before = Utc::now().naive_utc();

		// When
		let response = self
			.context
			.http_client
			.post(format!("/api/payments/{payment_id}/receipts"))
			.header(ContentType::JSON)
			.header(api_key_header())
			.header(Header::new("x-hasura-role", "admin"))
			.body(request.to_string())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Ok,
			"{}",
			response.into_string().await.unwrap_or_default()
		);

		let after = Utc::now().naive_utc();

		let response: payment::receipts::Response = response.into_json().await.unwrap();

		assert_matches!(
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
			Event::Payment(event) => {
				assert_matches!(event, PaymentEvent::Processed {
					id,
					amount,
					receipt_id,
					receipt,
					processed_at
				} => {
					assert_eq!(id, payment_id);
					assert_eq!(amount, Amount::from_decimal(dec!(100), currencies::STRK));
					assert_eq!(receipt_id, response.receipt_id);
					assert_eq!(receipt, PaymentReceipt::Starknet {
						recipient_address: "0x066252b2940ef3522947c7865e7e154c0af37f64380bc50684010d355585605e".parse().unwrap(),
						transaction_hash: "0x02ba0d419826ccdf25fc5068866b4ae5803753cbd4f15c944a0319e455d98803".parse().unwrap()
					});
					assert!(processed_at > before);
					assert!(processed_at < after);
				});
			}
		);

		Ok(())
	}

	async fn admin_can_add_a_lords_receipt(&mut self) -> Result<()> {
		info!("admin_can_add_a_lords_receipt");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let payment_id = PaymentId::new();

		self.context
			.event_publisher
			.publish_many(&[
				ProjectEvent::Created { id: project_id }.into(),
				ProjectEvent::BudgetLinked {
					id: project_id,
					budget_id,
					currency: currencies::LORDS,
				}
				.into(),
				BudgetEvent::Created {
					id: budget_id,
					currency: currencies::LORDS,
				}
				.into(),
				BudgetEvent::Allocated {
					id: budget_id,
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
				BudgetEvent::Spent {
					id: budget_id,
					amount: Decimal::from(100),
				}
				.into(),
				PaymentEvent::Requested {
					id: payment_id,
					project_id,
					requestor_id: UserId::new(),
					recipient_id: GithubUserId::from(595505u64),
					amount: Amount::from_decimal(dec!(100), currencies::LORDS),
					duration_worked: Some(Duration::hours(2)),
					reason: PaymentReason { work_items: vec![] },
					requested_at: Utc::now().naive_utc(),
				}
				.into(),
			])
			.await?;

		let request = json!({
			"amount": 100,
			"currency": "LORDS",
			"recipientWallet": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			"transactionReference": "0x02ba0d419826ccdf25fc5068866b4ae5803753cbd4f15c944a0319e455d98803",
		});

		let before = Utc::now().naive_utc();

		// When
		let response = self
			.context
			.http_client
			.post(format!("/api/payments/{payment_id}/receipts"))
			.header(ContentType::JSON)
			.header(api_key_header())
			.header(Header::new("x-hasura-role", "admin"))
			.body(request.to_string())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Ok,
			"{}",
			response.into_string().await.unwrap_or_default()
		);

		let after = Utc::now().naive_utc();

		let response: payment::receipts::Response = response.into_json().await.unwrap();

		assert_matches!(
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
			Event::Payment(event) => {
				assert_matches!(event, PaymentEvent::Processed {
					id,
					amount,
					receipt_id,
					receipt,
					processed_at
				} => {
					assert_eq!(id, payment_id);
					assert_eq!(amount, Amount::from_decimal(dec!(100), currencies::LORDS));
					assert_eq!(receipt_id, response.receipt_id);
					assert_eq!(receipt, PaymentReceipt::Ethereum {
						recipient_address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045".parse().unwrap(),
						recipient_ens: None,
						transaction_hash: "0x02ba0d419826ccdf25fc5068866b4ae5803753cbd4f15c944a0319e455d98803".parse().unwrap()
					});
					assert!(processed_at > before);
					assert!(processed_at < after);
				});
			}
		);

		Ok(())
	}

	async fn admin_can_add_a_usdc_receipt(&mut self) -> Result<()> {
		info!("admin_can_add_a_usdc_receipt");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let payment_id = PaymentId::new();

		self.context
			.event_publisher
			.publish_many(&[
				ProjectEvent::Created { id: project_id }.into(),
				ProjectEvent::BudgetLinked {
					id: project_id,
					budget_id,
					currency: currencies::USDC,
				}
				.into(),
				BudgetEvent::Created {
					id: budget_id,
					currency: currencies::USDC,
				}
				.into(),
				BudgetEvent::Allocated {
					id: budget_id,
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
				BudgetEvent::Spent {
					id: budget_id,
					amount: Decimal::from(100),
				}
				.into(),
				PaymentEvent::Requested {
					id: payment_id,
					project_id,
					requestor_id: UserId::new(),
					recipient_id: GithubUserId::from(595505u64),
					amount: Amount::from_decimal(dec!(100), currencies::USDC),
					duration_worked: Some(Duration::hours(2)),
					reason: PaymentReason { work_items: vec![] },
					requested_at: Utc::now().naive_utc(),
				}
				.into(),
			])
			.await?;

		let request = json!({
			"amount": 100,
			"currency": "USDC",
			"recipientWallet": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
			"transactionReference": "0x02ba0d419826ccdf25fc5068866b4ae5803753cbd4f15c944a0319e455d98803",
		});

		let before = Utc::now().naive_utc();

		// When
		let response = self
			.context
			.http_client
			.post(format!("/api/payments/{payment_id}/receipts"))
			.header(ContentType::JSON)
			.header(api_key_header())
			.header(Header::new("x-hasura-role", "admin"))
			.body(request.to_string())
			.dispatch()
			.await;

		// Then
		assert_eq!(
			response.status(),
			Status::Ok,
			"{}",
			response.into_string().await.unwrap_or_default()
		);

		let after = Utc::now().naive_utc();

		let response: payment::receipts::Response = response.into_json().await.unwrap();

		assert_matches!(
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
			Event::Payment(event) => {
				assert_matches!(event, PaymentEvent::Processed {
					id,
					amount,
					receipt_id,
					receipt,
					processed_at
				} => {
					assert_eq!(id, payment_id);
					assert_eq!(amount, Amount::from_decimal(dec!(100), currencies::USDC));
					assert_eq!(receipt_id, response.receipt_id);
					assert_eq!(receipt, PaymentReceipt::Ethereum {
						recipient_address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045".parse().unwrap(),
						recipient_ens: None,
						transaction_hash: "0x02ba0d419826ccdf25fc5068866b4ae5803753cbd4f15c944a0319e455d98803".parse().unwrap()
					});
					assert!(processed_at > before);
					assert!(processed_at < after);
				});
			}
		);

		Ok(())
	}

	async fn recipient_can_mark_invoice_as_received(&mut self) -> Result<()> {
		info!("recipient_can_mark_invoice_as_received");

		// Given
		let project_id = ProjectId::new();
		let budget_id = BudgetId::new();
		let payment_id = PaymentId::new();

		self.context
			.event_publisher
			.publish_many(&[
				ProjectEvent::Created { id: project_id }.into(),
				ProjectEvent::BudgetLinked {
					id: project_id,
					budget_id,
					currency: currencies::USDC,
				}
				.into(),
				BudgetEvent::Created {
					id: budget_id,
					currency: currencies::USDC,
				}
				.into(),
				BudgetEvent::Allocated {
					id: budget_id,
					amount: Decimal::from(1_000),
					sponsor_id: None,
				}
				.into(),
				BudgetEvent::Spent {
					id: budget_id,
					amount: Decimal::from(100),
				}
				.into(),
				PaymentEvent::Requested {
					id: payment_id,
					project_id,
					requestor_id: UserId::new(),
					recipient_id: GithubUserId::from(43467246u64),
					amount: Amount::from_decimal(dec!(100), currencies::USD),
					duration_worked: Some(Duration::hours(2)),
					reason: PaymentReason { work_items: vec![] },
					requested_at: Utc::now().naive_utc(),
				}
				.into(),
			])
			.await?;

		let request = json!({
			"payments": vec![payment_id],
		});

		let before = Utc::now().naive_utc();

		// When
		let response = self
			.context
			.http_client
			.put("/api/payments/invoiceReceivedAt")
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
			response.into_string().await.unwrap_or_default()
		);

		let after = Utc::now().naive_utc();

		assert_matches!(
			self.context.amqp.listen(EXCHANGE_NAME).await.unwrap(),
			Event::Payment(event) => {
				assert_matches!(event, PaymentEvent::InvoiceReceived {
					id,
					received_at
				} => {
					assert_eq!(id, payment_id);
					assert!(received_at > before);
					assert!(received_at < after);
				});
			}
		);

		Ok(())
	}
}
