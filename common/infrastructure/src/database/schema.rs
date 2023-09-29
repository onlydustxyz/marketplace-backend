// @generated automatically by Diesel CLI.

pub mod sql_types {
    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "allocated_time"))]
    pub struct AllocatedTime;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "citext"))]
    pub struct Citext;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "contact_channel"))]
    pub struct ContactChannel;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "contribution_status"))]
    pub struct ContributionStatus;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "contribution_type"))]
    pub struct ContributionType;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "currency"))]
    pub struct Currency;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "github_ci_checks"))]
    pub struct GithubCiChecks;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "github_code_review_outcome"))]
    pub struct GithubCodeReviewOutcome;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "github_code_review_status"))]
    pub struct GithubCodeReviewStatus;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "github_issue_status"))]
    pub struct GithubIssueStatus;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "github_pull_request_status"))]
    pub struct GithubPullRequestStatus;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "network"))]
    pub struct Network;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "preferred_method"))]
    pub struct PreferredMethod;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "profile_cover"))]
    pub struct ProfileCover;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "project_visibility"))]
    pub struct ProjectVisibility;

    #[derive(diesel::query_builder::QueryId, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "wallet_type"))]
    pub struct WalletType;
}

diesel::table! {
    applications (id) {
        id -> Uuid,
        received_at -> Timestamp,
        project_id -> Uuid,
        applicant_id -> Uuid,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::Citext;

    auth_users (id) {
        id -> Uuid,
        github_user_id -> Nullable<Int8>,
        email -> Nullable<Citext>,
        last_seen -> Nullable<Timestamp>,
        login_at_signup -> Text,
        avatar_url_at_signup -> Nullable<Text>,
        created_at -> Timestamp,
        admin -> Bool,
    }
}

diesel::table! {
    bank_accounts (user_id) {
        user_id -> Uuid,
        bic -> Text,
        iban -> Text,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::Currency;

    budgets (id) {
        id -> Uuid,
        initial_amount -> Numeric,
        remaining_amount -> Numeric,
        currency -> Currency,
    }
}

diesel::table! {
    closing_issues (github_issue_id, github_pull_request_id) {
        github_issue_id -> Int8,
        github_pull_request_id -> Int8,
    }
}

diesel::table! {
    commands (id) {
        id -> Uuid,
        processing_count -> Int4,
        created_at -> Timestamp,
        updated_at -> Nullable<Timestamp>,
        metadata -> Jsonb,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::ContactChannel;

    contact_informations (user_id, channel) {
        user_id -> Uuid,
        channel -> ContactChannel,
        contact -> Text,
        public -> Bool,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::ContributionType;
    use super::sql_types::ContributionStatus;

    contributions (id) {
        repo_id -> Int8,
        user_id -> Int8,
        #[sql_name = "type"]
        type_ -> ContributionType,
        details_id -> Text,
        status -> ContributionStatus,
        created_at -> Timestamp,
        closed_at -> Nullable<Timestamp>,
        id -> Text,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::Currency;

    crypto_usd_quotes (currency) {
        currency -> Currency,
        price -> Numeric,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    event_deduplications (deduplication_id) {
        deduplication_id -> Text,
        event_index -> Int4,
    }
}

diesel::table! {
    events (index) {
        index -> Int4,
        timestamp -> Timestamp,
        aggregate_name -> Varchar,
        aggregate_id -> Varchar,
        payload -> Jsonb,
        metadata -> Nullable<Jsonb>,
        command_id -> Nullable<Uuid>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::GithubIssueStatus;

    github_issues (id) {
        id -> Int8,
        repo_id -> Int8,
        number -> Int8,
        created_at -> Timestamp,
        author_id -> Int8,
        status -> GithubIssueStatus,
        title -> Text,
        html_url -> Text,
        closed_at -> Nullable<Timestamp>,
        assignee_ids -> Jsonb,
        comments_count -> Int8,
    }
}

diesel::table! {
    github_pull_request_commits (pull_request_id, sha) {
        sha -> Text,
        pull_request_id -> Int8,
        html_url -> Text,
        author_id -> Int8,
    }
}

diesel::table! {
    github_pull_request_indexes (pull_request_id) {
        pull_request_id -> Int8,
        pull_request_indexer_state -> Nullable<Jsonb>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::GithubCodeReviewStatus;
    use super::sql_types::GithubCodeReviewOutcome;

    github_pull_request_reviews (id) {
        pull_request_id -> Int8,
        reviewer_id -> Int8,
        status -> GithubCodeReviewStatus,
        outcome -> Nullable<GithubCodeReviewOutcome>,
        submitted_at -> Nullable<Timestamp>,
        id -> Text,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::GithubPullRequestStatus;
    use super::sql_types::GithubCiChecks;

    github_pull_requests (id) {
        id -> Int8,
        repo_id -> Int8,
        number -> Int8,
        created_at -> Timestamp,
        author_id -> Int8,
        merged_at -> Nullable<Timestamp>,
        status -> GithubPullRequestStatus,
        title -> Text,
        html_url -> Text,
        closed_at -> Nullable<Timestamp>,
        draft -> Bool,
        ci_checks -> Nullable<GithubCiChecks>,
    }
}

diesel::table! {
    github_repo_indexes (repo_id) {
        repo_id -> Int8,
        repo_indexer_state -> Nullable<Jsonb>,
        issues_indexer_state -> Nullable<Jsonb>,
        pull_requests_indexer_state -> Nullable<Jsonb>,
        indexed_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    github_repos (id) {
        id -> Int8,
        owner -> Text,
        name -> Text,
        updated_at -> Nullable<Timestamp>,
        description -> Text,
        stars -> Int4,
        fork_count -> Int4,
        html_url -> Text,
        languages -> Jsonb,
        parent_id -> Nullable<Int8>,
        has_issues -> Bool,
    }
}

diesel::table! {
    github_user_indexes (user_id) {
        user_id -> Int8,
        user_indexer_state -> Nullable<Jsonb>,
        contributor_indexer_state -> Nullable<Jsonb>,
        indexed_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    github_users (id) {
        id -> Int8,
        login -> Text,
        avatar_url -> Text,
        html_url -> Text,
        bio -> Nullable<Text>,
        location -> Nullable<Text>,
        website -> Nullable<Text>,
        twitter -> Nullable<Text>,
        linkedin -> Nullable<Text>,
        telegram -> Nullable<Text>,
    }
}

diesel::table! {
    ignored_contributions (project_id, contribution_id) {
        project_id -> Uuid,
        contribution_id -> Text,
    }
}

diesel::table! {
    onboardings (user_id) {
        user_id -> Uuid,
        terms_and_conditions_acceptance_date -> Nullable<Timestamp>,
        profile_wizard_display_date -> Nullable<Timestamp>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::Currency;

    payment_requests (id) {
        id -> Uuid,
        requestor_id -> Uuid,
        recipient_id -> Int8,
        amount -> Numeric,
        requested_at -> Timestamp,
        invoice_received_at -> Nullable<Timestamp>,
        hours_worked -> Int4,
        project_id -> Uuid,
        currency -> Currency,
    }
}

diesel::table! {
    payments (id) {
        id -> Uuid,
        amount -> Numeric,
        currency_code -> Text,
        receipt -> Jsonb,
        request_id -> Uuid,
        processed_at -> Timestamp,
    }
}

diesel::table! {
    pending_project_leader_invitations (id) {
        id -> Uuid,
        project_id -> Uuid,
        github_user_id -> Int8,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::ProjectVisibility;

    project_details (project_id) {
        project_id -> Uuid,
        telegram_link -> Nullable<Text>,
        logo_url -> Nullable<Text>,
        name -> Text,
        short_description -> Text,
        long_description -> Text,
        hiring -> Bool,
        rank -> Int4,
        visibility -> ProjectVisibility,
        key -> Text,
    }
}

diesel::table! {
    project_github_repos (project_id, github_repo_id) {
        project_id -> Uuid,
        github_repo_id -> Int8,
    }
}

diesel::table! {
    project_leads (project_id, user_id) {
        project_id -> Uuid,
        user_id -> Uuid,
        assigned_at -> Timestamp,
    }
}

diesel::table! {
    projects (id) {
        id -> Uuid,
    }
}

diesel::table! {
    projects_budgets (project_id, budget_id) {
        project_id -> Uuid,
        budget_id -> Uuid,
    }
}

diesel::table! {
    projects_contributors (project_id, github_user_id) {
        project_id -> Uuid,
        github_user_id -> Int8,
    }
}

diesel::table! {
    projects_pending_contributors (project_id, github_user_id) {
        project_id -> Uuid,
        github_user_id -> Int8,
    }
}

diesel::table! {
    projects_rewarded_users (project_id, github_user_id) {
        project_id -> Uuid,
        github_user_id -> Int8,
        reward_count -> Int4,
    }
}

diesel::table! {
    projects_sponsors (project_id, sponsor_id) {
        project_id -> Uuid,
        sponsor_id -> Uuid,
    }
}

diesel::table! {
    sponsors (id) {
        id -> Uuid,
        name -> Text,
        logo_url -> Text,
        url -> Nullable<Text>,
    }
}

diesel::table! {
    technologies (technology) {
        technology -> Text,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::PreferredMethod;

    user_payout_info (user_id) {
        user_id -> Uuid,
        identity -> Nullable<Jsonb>,
        location -> Nullable<Jsonb>,
        usd_preferred_method -> Nullable<PreferredMethod>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::AllocatedTime;
    use super::sql_types::ProfileCover;

    user_profile_info (id) {
        id -> Uuid,
        bio -> Nullable<Text>,
        location -> Nullable<Text>,
        website -> Nullable<Text>,
        languages -> Nullable<Jsonb>,
        weekly_allocated_time -> AllocatedTime,
        looking_for_a_job -> Bool,
        avatar_url -> Nullable<Text>,
        cover -> Nullable<ProfileCover>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::Network;
    use super::sql_types::WalletType;

    wallets (user_id, network) {
        user_id -> Uuid,
        network -> Network,
        #[sql_name = "type"]
        type_ -> WalletType,
        address -> Text,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::ContributionType;

    work_items (payment_id, repo_id, number) {
        payment_id -> Uuid,
        number -> Int8,
        repo_id -> Int8,
        id -> Text,
        #[sql_name = "type"]
        type_ -> ContributionType,
        project_id -> Uuid,
        recipient_id -> Int8,
    }
}

diesel::joinable!(pending_project_leader_invitations -> projects (project_id));
diesel::joinable!(projects_sponsors -> projects (project_id));
diesel::joinable!(projects_sponsors -> sponsors (sponsor_id));

diesel::allow_tables_to_appear_in_same_query!(
    applications,
    auth_users,
    bank_accounts,
    budgets,
    closing_issues,
    commands,
    contact_informations,
    contributions,
    crypto_usd_quotes,
    event_deduplications,
    events,
    github_issues,
    github_pull_request_commits,
    github_pull_request_indexes,
    github_pull_request_reviews,
    github_pull_requests,
    github_repo_indexes,
    github_repos,
    github_user_indexes,
    github_users,
    ignored_contributions,
    onboardings,
    payment_requests,
    payments,
    pending_project_leader_invitations,
    project_details,
    project_github_repos,
    project_leads,
    projects,
    projects_budgets,
    projects_contributors,
    projects_pending_contributors,
    projects_rewarded_users,
    projects_sponsors,
    sponsors,
    technologies,
    user_payout_info,
    user_profile_info,
    wallets,
    work_items,
);
