use std::{fmt, marker::PhantomData, time::Instant};

use async_trait::async_trait;
use olog::{error, info, IntoField};

use super::{error::Result, Indexable, Indexer};

pub struct LoggerIndexer<Id, I>
where
	Id: Indexable,
	I: Indexer<Id>,
{
	pub decorated: I,
	pub _phantom: PhantomData<Id>,
}

#[async_trait]
impl<Id, I> Indexer<Id> for LoggerIndexer<Id, I>
where
	Id: Indexable,
	I: Indexer<Id>,
{
	async fn index(&self, id: &Id) -> Result<()> {
		let start = Instant::now();
		match self.decorated.index(id).await {
			Ok(_) => {
				info!(
					indexed_item_id = format!("{id:?}"),
					indexed_item_id_type = std::any::type_name::<Id>(),
					indexer_type = self.decorated.to_string(),
					duration = start.elapsed().as_secs(),
					"Successfully indexed item"
				);
				Ok(())
			},
			Err(error) => {
				error!(
					error = error.to_field(),
					indexed_item_id = format!("{id:?}"),
					indexed_item_id_type = std::any::type_name::<Id>(),
					indexer_type = self.decorated.to_string(),
					"Failed to index item"
				);
				Err(error)
			},
		}
	}
}

impl<Id, I> fmt::Display for LoggerIndexer<Id, I>
where
	Id: Indexable,
	I: Indexer<Id>,
{
	fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
		write!(f, "{}", self.decorated)
	}
}

pub trait Logged<Id: Indexable, I: super::Indexer<Id>> {
	fn logged(self) -> LoggerIndexer<Id, I>;
}

impl<Id: Indexable, I: super::Indexer<Id>> Logged<Id, I> for I {
	fn logged(self) -> LoggerIndexer<Id, I> {
		LoggerIndexer {
			decorated: self,
			_phantom: Default::default(),
		}
	}
}
