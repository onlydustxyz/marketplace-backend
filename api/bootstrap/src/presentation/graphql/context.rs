use std::sync::Arc;

use domain::{AggregateRepository, Event, GithubUserId, Payment, Project, Publisher, UserId};
use infrastructure::{
	database::{ImmutableRepository, Repository},
	github,
};
use presentation::http::guards::Claims;

use super::{Error, Result};
use crate::{
    use_cases,
    domain::{ImageStoreService, Permissions},
    infrastructure::web3::ens,
    models::*,
};

pub struct Context {
	pub caller_permissions: Box<dyn Permissions>,
	caller_info: Option<Claims>,
	pub invoice_usecase: use_cases::payment::invoice::Usecase,
	pub update_project_usecase: use_cases::project::update::Usecase,
	pub link_github_repo_usecase: use_cases::project::link_github_repo::Usecase,
	pub unlink_github_repo_usecase: use_cases::project::unlink_github_repo::Usecase,
	pub add_sponsor_usecase: use_cases::project::add_sponsor::Usecase,
	pub remove_sponsor_usecase: use_cases::project::remove_sponsor::Usecase,
	pub remove_project_leader_usecase: use_cases::project::remove_leader::Usecase,
	pub invite_project_leader_usecase: use_cases::project::invite_leader::Usecase,
	pub accept_project_leader_invitation_usecase:
		use_cases::project::accept_leader_invitation::Usecase,
	pub project_details_repository: Arc<dyn Repository<ProjectDetails>>,
	pub apply_to_project_usecase: use_cases::project::apply::Usecase,
	pub onboard_usecase: use_cases::user::onboard::Usecase,
	pub update_user_profile_info_usecase: use_cases::user::update_profile_info::Usecase,
	pub ens: Arc<ens::Client>,
}

impl Context {
	#[allow(clippy::too_many_arguments)]
	pub fn new(
		caller_permissions: Box<dyn Permissions>,
		caller_info: Option<Claims>,
		project_repository: AggregateRepository<Project>,
		payment_repository: AggregateRepository<Payment>,
		project_details_repository: Arc<dyn Repository<ProjectDetails>>,
		project_sponsor_repository: Arc<dyn ImmutableRepository<ProjectsSponsor>>,
		pending_project_leader_invitations_repository: Arc<
			dyn ImmutableRepository<PendingProjectLeaderInvitation>,
		>,
		user_profile_info_repository: Arc<dyn UserProfileInfoRepository>,
		contact_informations_repository: Arc<dyn ContactInformationsRepository>,
		onboarding_repository: Arc<dyn Repository<Onboarding>>,
		github_api_client: Arc<github::Client>,
		ens: Arc<ens::Client>,
		simple_storage: Arc<dyn ImageStoreService>,
		bus: Arc<dyn Publisher<Event>>,
	) -> Self {
		Self {
			caller_permissions,
			caller_info,
			invoice_usecase: use_cases::payment::invoice::Usecase::new(
				bus.to_owned(),
				payment_repository,
			),
			update_project_usecase: use_cases::project::update::Usecase::new(
				project_details_repository.clone(),
				simple_storage.clone(),
			),
			link_github_repo_usecase: use_cases::project::link_github_repo::Usecase::new(
				bus.to_owned(),
				project_repository.clone(),
				github_api_client,
			),
			unlink_github_repo_usecase: use_cases::project::unlink_github_repo::Usecase::new(
				bus.to_owned(),
				project_repository.clone(),
			),
			add_sponsor_usecase: use_cases::project::add_sponsor::Usecase::new(
				project_sponsor_repository.clone(),
			),
			remove_sponsor_usecase: use_cases::project::remove_sponsor::Usecase::new(
				project_sponsor_repository,
			),
			remove_project_leader_usecase: use_cases::project::remove_leader::Usecase::new(
				bus.to_owned(),
				project_repository.clone(),
			),
			invite_project_leader_usecase: use_cases::project::invite_leader::Usecase::new(
				pending_project_leader_invitations_repository.clone(),
			),
			accept_project_leader_invitation_usecase:
				use_cases::project::accept_leader_invitation::Usecase::new(
					bus.to_owned(),
					pending_project_leader_invitations_repository,
					project_repository.clone(),
				),
			project_details_repository,
			apply_to_project_usecase: use_cases::project::apply::Usecase::new(
				project_repository,
				bus,
			),
			onboard_usecase: use_cases::user::onboard::Usecase::new(onboarding_repository),
			update_user_profile_info_usecase: use_cases::user::update_profile_info::Usecase::new(
				user_profile_info_repository,
				contact_informations_repository,
				simple_storage,
			),
			ens,
		}
	}

	pub fn caller_info(&self) -> Result<CallerInfo> {
		let caller_info = self.caller_info.clone().ok_or(Error::NotAuthenticated)?;

		Ok(CallerInfo {
			user_id: caller_info.user_id,
			github_user_id: caller_info.github_user_id,
		})
	}
}

impl juniper::Context for Context {}

pub struct CallerInfo {
	pub user_id: UserId,
	pub github_user_id: GithubUserId,
}
