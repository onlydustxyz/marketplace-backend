use domain::ProjectId;
use url::Url;

pub struct Project {
	pub id: ProjectId,
	pub name: String,
	pub short_description: String,
	pub long_description: String,
	pub logo_url: Option<Url>,
	pub more_info_url: Option<Url>,
	pub hiring: bool,
	pub visibility: ProjectVisibility,
	pub rank: i32,
}

impl Project {
	pub fn new(
		name: String,
		short_description: String,
		long_description: String,
		logo_url: Option<Url>,
		more_info_url: Option<Url>,
		hiring: bool,
		visibility: ProjectVisibility,
		rank: Option<i32>,
	) -> Self {
		Self {
			id: ProjectId::new(),
			name,
			short_description,
			long_description,
			logo_url,
			more_info_url,
			hiring,
			visibility,
			rank: rank.unwrap_or_default(),
		}
	}
}

pub enum ProjectVisibility {
	Public,
	Private,
}
