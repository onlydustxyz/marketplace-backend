use std::sync::Arc;

use anyhow::Result;
use derive_more::Constructor;
use domain::{AggregateRepository, CommandId, DomainError, Event, Payment, PaymentId, Publisher};
use tracing::instrument;

use crate::domain::Publishable;

#[derive(Constructor)]
pub struct Usecase {
	event_publisher: Arc<dyn Publisher<Event>>,
	payment_repository: AggregateRepository<Payment>,
}

impl Usecase {
	#[instrument(skip(self))]
	pub async fn cancel(&self, payment_id: &PaymentId) -> Result<CommandId, DomainError> {
		let payment = self.payment_repository.find_by_id(payment_id)?;

		let command_id = CommandId::new();

		payment
			.cancel()
			.map_err(|e| DomainError::InvalidInputs(e.into()))?
			.map(Event::from)
			.collect::<Vec<_>>()
			.publish(self.event_publisher.clone())
			.await?;

		Ok(command_id)
	}
}
