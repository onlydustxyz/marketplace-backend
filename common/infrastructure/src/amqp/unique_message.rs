use std::{
	collections::HashMap,
	fmt::{Debug, Display},
};

use chrono::{NaiveDateTime, Utc};
use derive_getters::Getters;
use domain::CommandId;
use olog::{
	opentelemetry::{
		propagation::{Extractor, TextMapPropagator},
		sdk::propagation::TraceContextPropagator,
	},
	tracing_opentelemetry::OpenTelemetrySpanExt,
};
use serde::{Deserialize, Serialize};
use serde_json::Value;
use tracing::Span;
use uuid::Uuid;

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, Getters)]
pub struct UniqueMessage<P> {
	id: Uuid,
	command_id: Option<CommandId>,
	timestamp: NaiveDateTime,
	metadata: Value,
	payload: P,
	trace_context: HashMap<String, String>,
}

impl<P> Extractor for UniqueMessage<P> {
	fn get(&self, key: &str) -> Option<&str> {
		Extractor::get(&self.trace_context, key)
	}

	fn keys(&self) -> Vec<&str> {
		Extractor::keys(&self.trace_context)
	}
}

impl<P> UniqueMessage<P> {
	pub fn new(payload: P) -> Self {
		let mut trace_context = HashMap::new();
		TraceContextPropagator::new()
			.inject_context(&Span::current().context(), &mut trace_context);
		Self {
			id: Uuid::new_v4(),
			command_id: None,
			payload,
			timestamp: Utc::now().naive_utc(),
			metadata: Default::default(),
			trace_context,
		}
	}

	pub fn with_command(self, command_id: CommandId) -> Self {
		Self {
			command_id: Some(command_id),
			..self
		}
	}

	pub fn copy(self) -> Self {
		let message = Self::new(self.payload);
		match self.command_id {
			Some(command_id) => message.with_command(command_id),
			_ => message,
		}
	}
}

impl<P: Serialize> Display for UniqueMessage<P> {
	fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
		write!(
			f,
			"{}",
			serde_json::to_string(self).map_err(|_| std::fmt::Error)?
		)?;
		Ok(())
	}
}

pub trait Unique
where
	Self: Sized,
{
	fn unique(self) -> UniqueMessage<Self>;
}

impl<P> Unique for P {
	fn unique(self) -> UniqueMessage<Self> {
		UniqueMessage::new(self)
	}
}
