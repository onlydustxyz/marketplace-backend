use std::collections::HashMap;

use serde::Deserialize;

#[derive(Debug, Deserialize, Default, Clone)]
pub struct Config {
	pub base_url: String,
	#[serde(default)]
	pub headers: HashMap<String, String>,
}
