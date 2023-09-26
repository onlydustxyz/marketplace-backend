use diesel::Identifiable;
use domain::{
	blockchain::{self, aptos, evm, starknet},
	UserId,
};
use infrastructure::database::{
	enums::{Network, WalletType},
	schema::wallets,
};
use serde::{Deserialize, Serialize};

#[derive(
	Debug,
	Clone,
	Insertable,
	Queryable,
	Serialize,
	Deserialize,
	AsChangeset,
	Identifiable,
	PartialEq,
	Eq,
	Model,
)]
#[diesel(primary_key(user_id, network))]
pub struct Wallet {
	pub user_id: UserId,
	pub network: Network,
	pub type_: WalletType,
	pub address: String,
}

impl Identifiable for Wallet {
	type Id = (UserId, Network);

	fn id(self) -> Self::Id {
		(self.user_id, self.network)
	}
}

impl From<(UserId, blockchain::Network, evm::Wallet)> for Wallet {
	fn from((user_id, network, wallet): (UserId, blockchain::Network, evm::Wallet)) -> Self {
		match wallet {
			evm::Wallet::Name(name) => (user_id, network, name).into(),
			evm::Wallet::Address(address) => (user_id, network, address).into(),
		}
	}
}

impl From<(UserId, blockchain::Network, evm::Address)> for Wallet {
	fn from((user_id, network, address): (UserId, blockchain::Network, evm::Address)) -> Self {
		Self {
			user_id,
			network: network.into(),
			type_: WalletType::Address,
			address: address.to_string(),
		}
	}
}

impl From<(UserId, blockchain::Network, evm::Name)> for Wallet {
	fn from((user_id, network, address): (UserId, blockchain::Network, evm::Name)) -> Self {
		Self {
			user_id,
			network: network.into(),
			type_: WalletType::Name,
			address: address.to_string(),
		}
	}
}

impl From<(UserId, aptos::Address)> for Wallet {
	fn from((user_id, address): (UserId, aptos::Address)) -> Self {
		Self {
			user_id,
			network: Network::Aptos,
			type_: WalletType::Address,
			address: address.to_string(),
		}
	}
}

impl From<(UserId, starknet::Address)> for Wallet {
	fn from((user_id, address): (UserId, starknet::Address)) -> Self {
		Self {
			user_id,
			network: Network::Starknet,
			type_: WalletType::Address,
			address: address.to_string(),
		}
	}
}
