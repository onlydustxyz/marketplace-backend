use url::Url;
use crate::use_cases::sponsor;

pub trait SponsorUseCasePort {
    async fn create(
        &self,
        name: String,
        logo_url: Url,
        url: Option<Url>,
    ) -> Result<Sponsor, Error>;
}