use std::sync::Arc;

use ::olog::info;
use anyhow::Result;
use backend_domain::{Event, Identified, Publisher, Subscriber, SubscriberCallbackError};
use backend_infrastructure::{
	amqp::{self, Bus, Destination, UniqueMessage},
	config,
	database::{self, init_pool, Client as DatabaseClient},
	event_bus::EXCHANGE_NAME,
	tracing::{self, Tracer},
};
use dotenv::dotenv;
use event_store::{bus, domain::EventStore};
use futures::TryFutureExt;
use serde::Deserialize;

#[derive(Deserialize)]
pub struct Config {
	database: database::Config,
	amqp: amqp::Config,
	tracer: tracing::Config,
}

#[tokio::main]
async fn main() -> Result<()> {
	dotenv().ok();
	let config: Config = config::load("event-store/app.yaml")?;
	let _tracer = Tracer::init(config.tracer, "event_store")?;

	let inbound_event_bus = bus::consumer(config.amqp.clone()).await?;
	let outbound_event_bus =
		Arc::new(Bus::new(config.amqp).await?.as_publisher(Destination::exchange(EXCHANGE_NAME)));
	let database = Arc::new(DatabaseClient::new(init_pool(config.database)?));

	inbound_event_bus
		.subscribe(|event| {
			store(database.clone(), event)
				.and_then(|event| publish(event, outbound_event_bus.clone()))
		})
		.await?;

	Ok(())
}

async fn store(
	store: Arc<dyn EventStore>,
	message: UniqueMessage<Event>,
) -> Result<UniqueMessage<Event>, SubscriberCallbackError> {
	info!(message_content = message.to_string(), "📨 Received event");
	store
		.append(
			&IdentifiableAggregate::aggregate_id(message.payload()),
			message.clone(),
		)
		.map_err(|e| SubscriberCallbackError::Fatal(e.into()))?;

	Ok(message)
}

async fn publish(
	message: UniqueMessage<Event>,
	publisher: Arc<dyn Publisher<UniqueMessage<Event>>>,
) -> Result<(), SubscriberCallbackError> {
	// Create a new message with same payload so that trace context is right
	let message = message.copy();

	publisher
		.publish(&message)
		.await
		.map_err(|e| SubscriberCallbackError::Fatal(e.into()))?;
	Ok(())
}

trait IdentifiableAggregate {
	fn aggregate_id(&self) -> String;
}

impl IdentifiableAggregate for Event {
	fn aggregate_id(&self) -> String {
		match &self {
			Event::Application(event) => event.id().to_string(),
			Event::Budget(event) => event.id().to_string(),
			Event::Payment(event) => event.id().to_string(),
			Event::Project(event) => event.id().to_string(),
		}
	}
}
