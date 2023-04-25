use jsonwebtoken::EncodingKey;
use octocrab::Octocrab;

use super::{AddHeaders, Config};
pub struct Client {
	octocrab: Octocrab,
	config: Config,
}

const PRIVATE_KEY: &str = r#"-----BEGIN RSA PRIVATE KEY-----
xxx
-----END RSA PRIVATE KEY-----
"#;

impl Client {
	pub fn new(config: &Config) -> anyhow::Result<Self> {
		Ok(Self {
			octocrab: Octocrab::builder()
				.base_url(&config.base_url)?
				.app(
					octocrab::models::AppId(323090),
					EncodingKey::from_rsa_pem(PRIVATE_KEY.as_bytes()).unwrap(),
				)
				.add_headers(&config.headers)?
				.build()?,
			config: config.clone(),
		})
	}

	pub fn octocrab(&self) -> &Octocrab {
		&self.octocrab
	}

	pub fn config(&self) -> &Config {
		&self.config
	}
}
