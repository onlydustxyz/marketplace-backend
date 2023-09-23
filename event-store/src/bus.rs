use backend_infrastructure::amqp::{Bus, BusError, Config, ConsumableBus};
use lapin::options::QueueDeclareOptions;
use olog::info;

pub const QUEUE_NAME: &str = "event-store";

pub async fn consumer(config: Config) -> Result<ConsumableBus, BusError> {
	let event_bus = Bus::new(config)
		.await?
		.with_queue(
			QUEUE_NAME.to_string(),
			QueueDeclareOptions {
				// allows multiple connections to this queue, and do not delete the queue when
				// connection is closed
				exclusive: false,

				// the queue will survive a broker restart
				durable: true,

				// do not delete the queue when the last consumer unsubscribes
				auto_delete: false,
				..Default::default()
			},
		)
		.await?;
	info!(queue = QUEUE_NAME, "🎧 Start listening to events");
	Ok(event_bus)
}
