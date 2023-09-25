#![allow(unused)]
use anyhow::Result;
use diesel::{ExpressionMethods, QueryDsl, RunQueryDsl};
use domain::{
	GithubCodeReview, GithubCodeReviewOutcome, GithubCodeReviewStatus, GithubPullRequestId,
};
use github_indexer::models;
use infrastructure::database::schema::github_pull_request_reviews;

use super::*;
use crate::context::Context;

pub fn approved(
	pull_request_id: GithubPullRequestId,
	status: GithubCodeReviewStatus,
) -> GithubCodeReview {
	GithubCodeReview {
		pull_request_id,
		reviewer: users::anthony(),
		status,
		outcome: Some(GithubCodeReviewOutcome::Approved),
		submitted_at: "2023-07-29T08:02:16Z".parse().ok(),
	}
}

pub fn change_requested(
	pull_request_id: GithubPullRequestId,
	status: GithubCodeReviewStatus,
) -> GithubCodeReview {
	GithubCodeReview {
		pull_request_id,
		reviewer: users::ofux(),
		status,
		outcome: Some(GithubCodeReviewOutcome::ChangeRequested),
		submitted_at: "2023-07-28T08:13:36Z".parse().ok(),
	}
}

pub fn commented(
	pull_request_id: GithubPullRequestId,
	status: GithubCodeReviewStatus,
) -> GithubCodeReview {
	GithubCodeReview {
		pull_request_id,
		reviewer: users::alex(),
		status,
		outcome: None,
		submitted_at: "2023-07-28T08:15:32Z".parse().ok(),
	}
}

pub fn requested(
	pull_request_id: GithubPullRequestId,
	status: GithubCodeReviewStatus,
) -> GithubCodeReview {
	GithubCodeReview {
		pull_request_id,
		reviewer: users::anthony(),
		status,
		outcome: None,
		submitted_at: None,
	}
}

#[track_caller]
pub fn assert_eq(review: models::github_pull_requests::Review, expected: GithubCodeReview) {
	assert_eq!(review.pull_request_id, expected.pull_request_id);
	assert_eq!(review.reviewer_id, expected.reviewer.id);
	assert_eq!(review.status, expected.status.into());
	assert_eq!(review.outcome, expected.outcome.map(|o| o.into()));
	assert_eq!(
		review.submitted_at,
		expected.submitted_at.map(|d| d.naive_utc())
	);
}

#[track_caller]
pub fn assert_indexed(context: &mut Context, expected: Vec<GithubCodeReview>) -> Result<()> {
	let mut connection = context.database.client.connection()?;
	let mut reviews: Vec<models::github_pull_requests::Review> = github_pull_request_reviews::table
		.order((
			github_pull_request_reviews::dsl::pull_request_id.asc(),
			github_pull_request_reviews::dsl::status.asc(),
			github_pull_request_reviews::dsl::reviewer_id.asc(),
		))
		.load(&mut *connection)?;

	assert_eq!(reviews.len(), expected.len(), "Invalid review count");

	for (review, expected) in reviews.into_iter().zip(expected) {
		assert_eq(review, expected);
	}

	Ok(())
}
