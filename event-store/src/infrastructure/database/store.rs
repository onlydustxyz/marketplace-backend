use backend_domain::Event;
use backend_infrastructure::{
	amqp::UniqueMessage,
	database::{
		schema::{event_deduplications, event_deduplications::dsl, events, events::index},
		Client,
	},
};
use diesel::{dsl::exists, prelude::*};
use olog::error;
use serde_json::{to_value as to_json, Value as Json};
use tracing::instrument;

use crate::{domain::*, infrastructure::database::models};

type Result<T> = std::result::Result<T, EventStoreError>;

trait NamedAggregate {
	fn aggregate_name(&self) -> &str;
}

impl NamedAggregate for Event {
	fn aggregate_name(&self) -> &str {
		match self {
			Event::Application(_) => "APPLICATION",
			Event::Budget(_) => "BUDGET",
			Event::Payment(_) => "PAYMENT",
			Event::Project(_) => "PROJECT",
		}
	}
}

impl EventStore for Client {
	#[instrument(name = "EventStore::append", skip(self))]
	fn append(&self, aggregate_id: &str, storable_event: UniqueMessage<Event>) -> Result<()> {
		let mut connection = self.connection().map_err(|e| {
			error!("Failed to connect to database: {e}");
			EventStoreError::Connection(e.into())
		})?;

		let domain_event = storable_event.payload().clone();
		let event = models::Event {
			timestamp: *storable_event.timestamp(),
			aggregate_name: storable_event.payload().aggregate_name().to_owned(),
			aggregate_id: aggregate_id.to_owned(),
			payload: serialize_event(&domain_event)?,
			metadata: storable_event.metadata().clone(),
			command_id: storable_event.command_id().map(Into::into),
		};

		connection
			.transaction(|connection| {
				let already_exists: bool = diesel::select(exists(
					dsl::event_deduplications
						.filter(dsl::deduplication_id.eq(storable_event.id().to_string())),
				))
				.get_result(&mut *connection)?;

				if already_exists {
					error!(
						"Event with same deduplication_id ({}) already exists. This event will be ignored.",
						storable_event.id()
					);
					return Ok(());
				}

				let inserted_event_index: i32 = diesel::insert_into(events::table)
					.values(&event)
					.returning(index)
					.get_result(&mut *connection)?;

				let deduplication = models::EventDeduplication {
					deduplication_id: storable_event.id().to_string(),
					event_index: inserted_event_index,
				};

				diesel::insert_into(event_deduplications::table)
					.values(&deduplication)
					.execute(&mut *connection)?;

				Ok(())
			})
			.map_err(|e: diesel::result::Error| {
				error!(
					error = e.to_string(),
					"Failed to insert event into database"
				);
				EventStoreError::Append(e.into())
			})?;

		Ok(())
	}
}

fn serialize_event(event: &Event) -> Result<Json> {
	match event {
		Event::Application(event) => to_json(event),
		Event::Budget(event) => to_json(event),
		Event::Payment(event) => to_json(event),
		Event::Project(event) => to_json(event),
	}
	.map_err(|e| {
		error!("Failed to serialize event {event:?}: {e}");
		EventStoreError::InvalidEvent(e.into())
	})
}
