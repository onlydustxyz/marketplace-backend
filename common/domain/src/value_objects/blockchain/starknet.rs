use std::fmt::Display;

use derive_more::{From, FromStr, Into};
use serde_with::{DeserializeFromStr, SerializeDisplay};
use starknet_ff::FieldElement;

#[derive(
	Debug, Clone, PartialEq, Eq, SerializeDisplay, DeserializeFromStr, From, Into, FromStr,
)]
pub struct Address(FieldElement);

impl Display for Address {
	fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
		write!(f, "{:#064x}", self.0)
	}
}

#[derive(
	Debug, Clone, PartialEq, Eq, SerializeDisplay, DeserializeFromStr, From, Into, FromStr,
)]
pub struct TransactionHash(FieldElement);

impl Display for TransactionHash {
	fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
		write!(f, "{:#064x}", self.0)
	}
}
