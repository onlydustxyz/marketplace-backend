use derive_more::{Display, From, FromStr, Into};
use serde_with::{DeserializeFromStr, SerializeDisplay};

#[derive(
	Debug, Clone, PartialEq, Eq, From, Into, FromStr, Display, SerializeDisplay, DeserializeFromStr,
)]
pub struct Iban(String);
