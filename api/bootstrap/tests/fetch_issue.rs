#[macro_use]
extern crate diesel;

use anyhow::Result;
use olog::info;
use rocket::http::{Header, Status};
use rstest::rstest;
use serde_json::json;
use testcontainers::clients::Cli;

use crate::context::{
	docker,
	utils::{api_key_header, jwt},
	Context,
};

mod context;
mod models;

#[rstest]
#[tokio::test(flavor = "multi_thread")]
pub async fn fetch_issue(docker: &'static Cli) {
	let mut test = Test {
		context: Context::new(docker).await.expect("Unable to create test context"),
	};

	test.should_fetch_an_issue_given_a_repo_owner_repo_name_issue_number()
		.await
		.expect("should_fetch_an_issue_given_a_repo_owner_repo_name_issue_number");
}

struct Test<'a> {
	context: Context<'a>,
}

impl<'a> Test<'a> {
	async fn should_fetch_an_issue_given_a_repo_owner_repo_name_issue_number(
		&mut self,
	) -> Result<()> {
		info!("should_fetch_an_issue_given_a_repo_owner_repo_name_issue_number");
		// Given
		let resource = "/api/issues/repo_onwer_test_1/repo_name_test_1/111";

		// When
		let response = self
			.context
			.http_client
			.get(resource.to_string())
			.header(api_key_header())
			.header(Header::new(
				"Authorization",
				format!("Bearer {}", jwt(None)),
			))
			.dispatch()
			.await;

		// Then
		assert_eq!(response.status(), Status::Ok);
		let issue: serde_json::Value = response.into_json().await.unwrap();
		assert_eq!(
			issue,
			json!({
				"id": 1840630180,
				"repoId": 663102799,
				"number": 111,
				"title": "issue-title",
				"author": {
				  "id": 16590657,
				  "login": "PierreOucif",
				  "avatarUrl": "https://avatars.githubusercontent.com/u/16590657?v=4",
				  "htmlUrl": "https://github.com/PierreOucif"
				},
				"htmlUrl": "https://github.com/repo_onwer_test_1/repo_name_test_1/issues/111",
				"status": "OPEN",
				"createdAt": "2023-08-08T06:11:35Z",
				"updatedAt": "2023-08-08T06:11:35Z",
				"closedAt": null,
				"commentsCount": 0
			})
		);
		Ok(())
	}
}
