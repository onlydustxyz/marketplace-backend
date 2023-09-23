use std::collections::HashSet;

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

use crate::{aggregate::Identified, *};

#[derive(Default, Debug, Clone, Serialize, Deserialize)]
pub struct Entity {
	pub id: CommandId,
	pub processing_count: i32,
	pub created_at: DateTime<Utc>,
	pub updated_at: Option<DateTime<Utc>>,
	pub metadata: Metadata,
}

impl Entity {
	pub fn new(id: CommandId) -> Self {
		Self {
			id,
			created_at: Utc::now(),
			..Default::default()
		}
	}
}

#[derive(Debug, Clone, Default, Serialize, Deserialize)]
pub struct Metadata {
	aggregates: HashSet<AggregateId>,
}

impl Metadata {
	pub fn add_aggregate(&mut self, aggregate_metadata: AggregateId) {
		self.aggregates.insert(aggregate_metadata);
	}
}

#[derive(Debug, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum AggregateId {
	Project(ProjectId),
	Application(ApplicationId),
	Budget(BudgetId),
	Payment(PaymentId),
}

impl From<Event> for AggregateId {
	fn from(event: Event) -> Self {
		match event {
			Event::Project(e) => Self::Project(*e.id()),
			Event::Application(e) => Self::Application(*e.id()),
			Event::Budget(e) => Self::Budget(*e.id()),
			Event::Payment(e) => Self::Payment(*e.id()),
		}
	}
}
