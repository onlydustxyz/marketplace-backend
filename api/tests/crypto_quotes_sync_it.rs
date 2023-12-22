mod context;
mod fixtures;
mod models;

use anyhow::Result;
use api::models::CryptoUsdQuote;
use assert_matches::assert_matches;
use chrono::Utc;
use infrastructure::{database::enums::Currency, dbclient::ImmutableRepository};
use olog::info;
use rstest::rstest;
use rust_decimal::Decimal;
use rust_decimal_macros::dec;
use testcontainers::clients::Cli;

use crate::{
	context::{docker, Context},
	fixtures::job::Runnable,
};

#[macro_use]
extern crate diesel;

#[rstest]
#[tokio::test(flavor = "multi_thread")]
pub async fn crypto_quotes_sync(docker: &'static Cli) {
	let mut test = Test {
		context: Context::new(docker).await.expect("Unable to create test context"),
	};

	test.should_fetch_and_store_all_usd_prices()
		.await
		.expect("should_fetch_and_store_all_usd_prices");
}

struct Test<'a> {
	context: Context<'a>,
}

impl<'a> Test<'a> {
	async fn should_fetch_and_store_all_usd_prices(&mut self) -> Result<()> {
		info!("should_fetch_and_store_all_usd_prices");

		// Given
		self.context.database.client.try_insert_all(vec![
			CryptoUsdQuote {
				currency: Currency::Eth,
				price: Decimal::ZERO,
				updated_at: Utc::now().naive_utc(),
			},
			CryptoUsdQuote {
				currency: Currency::Op,
				price: Decimal::ZERO,
				updated_at: Utc::now().naive_utc(),
			},
			CryptoUsdQuote {
				currency: Currency::Apt,
				price: Decimal::ZERO,
				updated_at: Utc::now().naive_utc(),
			},
			CryptoUsdQuote {
				currency: Currency::Lords,
				price: Decimal::ZERO,
				updated_at: Utc::now().naive_utc(),
			},
			CryptoUsdQuote {
				currency: Currency::Usdc,
				price: Decimal::ZERO,
				updated_at: Utc::now().naive_utc(),
			},
		])?;

		// When
		let before = Utc::now().naive_utc();
		self.context.quotes_syncer.run().await?;
		let after = Utc::now().naive_utc();

		// Then
		self.context.database.client.list()?.into_iter().for_each(|quote| {
			assert_matches!(quote, CryptoUsdQuote { currency, price, updated_at } => {
				match currency {
					Currency::Usd => panic!("USD should never be in this table"),
					Currency::Eth => assert_eq!(price, dec!(1654.354727031965)),
					Currency::Op => assert_eq!(price, dec!(1.404801535167209)),
					Currency::Apt => assert_eq!(price, dec!(5.25259017365663)),
					Currency::Lords => assert_eq!(price, dec!(0.3550981620115103)),
					Currency::Usdc => assert_eq!(price, dec!(1.000142670201984)),
					Currency::Strk => panic!("STRK is not liquid yet"),
				}
				assert!(before <= updated_at);
				assert!(after >= updated_at);
			})
		});

		Ok(())
	}
}
