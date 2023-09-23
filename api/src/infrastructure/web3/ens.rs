#[cfg(test)]
mod mock {
	use domain::blockchain::evm;
	use infrastructure::web3::{ens, Config};
	use mockall::mock;

	mock! {
		pub Client {
			pub fn new(config: Config) -> Result<Self, ens::Error> ;
			pub async fn eth_address(&self, name: &str) -> Result<evm::Address, ens::Error>;
		}
	}
}

#[cfg(not(test))]
pub use infrastructure::web3::ens::Client;
pub use infrastructure::web3::ens::*;
#[cfg(test)]
pub use mock::MockClient as Client;
