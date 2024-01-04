use std::sync::Arc;

use ::domain::{AggregateRepository, Project};
use domain::{Application, Budget, Event, EventStore, GithubFetchService, Payment, Publisher};
pub use http::Config;
use infrastructure::{
	dbclient::{ImmutableRepository, Repository},
	github,
};
use presentation::http;
use rocket::{Build, Rocket};

use crate::{
	application,
	domain::{projectors::projections::Projector, DustyBotService, ImageStoreService},
	infrastructure::web3::ens,
	models::*,
	presentation::{graphql, http::github_client_pat_factory::GithubClientPatFactory},
};

mod bootstrap;
pub mod dto;
mod error;
pub mod github_client_pat_factory;
pub mod roles;
pub mod routes;
mod usecases;
pub use bootstrap::bootstrap;

#[allow(clippy::too_many_arguments)]
pub fn serve(
	config: crate::Config,
	schema: graphql::Schema,
	event_bus: Arc<dyn Publisher<Event>>,
	project_repository: AggregateRepository<Project>,
	budget_repository: AggregateRepository<Budget>,
	payment_repository: AggregateRepository<Payment>,
	project_details_repository: Arc<dyn Repository<ProjectDetails>>,
	sponsor_repository: Arc<dyn Repository<Sponsor>>,
	project_sponsor_repository: Arc<dyn ImmutableRepository<ProjectsSponsor>>,
	pending_project_leader_invitations_repository: Arc<
		dyn ImmutableRepository<PendingProjectLeaderInvitation>,
	>,
	ignored_contributions_repository: Arc<dyn ImmutableRepository<IgnoredContribution>>,
	user_info_repository: Arc<dyn Repository<UserPayoutInfo>>,
	user_profile_info_repository: Arc<dyn UserProfileInfoRepository>,
	contact_informations_repository: Arc<dyn ContactInformationsRepository>,
	onboarding_repository: Arc<dyn Repository<Onboarding>>,
	payout_info_repository: Arc<dyn PayoutInfoRepository>,
	github_api_client: Arc<github::Client>,
	github_fetch_service: Arc<dyn GithubFetchService>,
	dusty_bot_api_client: Arc<github::Client>,
	dusty_bot_service: Arc<dyn DustyBotService>,
	ens: Arc<ens::Client>,
	simple_storage: Arc<dyn ImageStoreService>,
	github_client_pat_factory: Arc<GithubClientPatFactory>,
	project_event_store: Arc<dyn EventStore<Project>>,
	application_event_store: Arc<dyn EventStore<Application>>,
	budget_event_store: Arc<dyn EventStore<Budget>>,
	payment_event_store: Arc<dyn EventStore<Payment>>,
	projector: Projector,
) -> Rocket<Build> {
	let update_user_profile_info_usecase = application::user::update_profile_info::Usecase::new(
		user_profile_info_repository.clone(),
		contact_informations_repository.clone(),
		simple_storage.clone(),
	);

	let create_github_issue_usecase = application::dusty_bot::create_and_close_issue::Usecase::new(
		project_repository.clone(),
		dusty_bot_api_client,
		github_api_client.clone(),
	);

	rocket::custom(http::config::rocket("api/Rocket.toml"))
		.manage(config.http.clone())
		.manage(config)
		.manage(schema)
		.manage(event_bus)
		.manage(project_repository)
		.manage(budget_repository)
		.manage(payment_repository)
		.manage(project_details_repository)
		.manage(sponsor_repository)
		.manage(project_sponsor_repository)
		.manage(pending_project_leader_invitations_repository)
		.manage(ignored_contributions_repository)
		.manage(user_info_repository)
		.manage(onboarding_repository)
		.manage(user_profile_info_repository)
		.manage(contact_informations_repository)
		.manage(github_api_client)
		.manage(ens)
		.manage(simple_storage)
		.manage(update_user_profile_info_usecase)
		.manage(create_github_issue_usecase)
		.manage(github_client_pat_factory)
		.manage(payout_info_repository)
		.manage(github_fetch_service)
		.manage(dusty_bot_service)
		.manage(project_event_store)
		.manage(application_event_store)
		.manage(budget_event_store)
		.manage(payment_event_store)
		.manage(projector)
		.attach(http::guards::Cors)
		.mount(
			"/",
			routes![
				http::routes::health_check,
				http::routes::options_preflight_handler,
				routes::graphql::graphiql,
				routes::graphql::get_graphql_handler,
				routes::graphql::post_graphql_handler
			],
		)
		.mount(
			"/api",
			routes![
				routes::users::update_user_profile,
				routes::users::update_user_payout_info,
				routes::users::search_users,
				routes::projects::create_project,
				routes::projects::contributions::ignore,
				routes::projects::contributions::unignore,
				routes::projects::budgets::allocate,
				routes::issues::create_and_close_issue,
				routes::issues::fetch_issue_by_repo_owner_name_issue_number,
				routes::pull_requests::fetch_pull_request,
				routes::payment::request_payment,
				routes::payment::mark_invoice_as_received,
				routes::payment::cancel_payment,
				routes::payment::receipts::create,
				routes::sponsors::create_sponsor,
				routes::sponsors::update_sponsor
			],
		)
		.mount(
			"/internal",
			routes![
				routes::internal::events::checks::check,
				routes::internal::events::refresh::refresh
			],
		)
}
