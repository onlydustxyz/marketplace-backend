use rstest::fixture;
use serde_json::json;

use crate::models::*;

#[fixture]
pub fn anthony() -> User {
	serde_json::from_value(json!({
	  "login": "AnthonyBuisset",
	  "id": 43467246,
	  "node_id": "MDQ6VXNlcjQzNDY3MjQ2",
	  "avatar_url": "https://avatars.githubusercontent.com/u/43467246?v=4",
	  "gravatar_id": "",
	  "url": "https://api.github.com/users/AnthonyBuisset",
	  "html_url": "https://github.com/AnthonyBuisset",
	  "followers_url": "https://api.github.com/users/AnthonyBuisset/followers",
	  "following_url": "https://api.github.com/users/AnthonyBuisset/following{/other_user}",
	  "gists_url": "https://api.github.com/users/AnthonyBuisset/gists{/gist_id}",
	  "starred_url": "https://api.github.com/users/AnthonyBuisset/starred{/owner}{/repo}",
	  "subscriptions_url": "https://api.github.com/users/AnthonyBuisset/subscriptions",
	  "organizations_url": "https://api.github.com/users/AnthonyBuisset/orgs",
	  "repos_url": "https://api.github.com/users/AnthonyBuisset/repos",
	  "events_url": "https://api.github.com/users/AnthonyBuisset/events{/privacy}",
	  "received_events_url": "https://api.github.com/users/AnthonyBuisset/received_events",
	  "type": "User",
	  "site_admin": false,
	  "name": "Antho",
	  "company": null,
	  "blog": "https://linktr.ee/abuisset",
	  "location": "Vence, France",
	  "email": null,
	  "hireable": null,
	  "bio": "FullStack engineer, SOLID maximalist",
	  "twitter_username": "abuisset",
	  "public_repos": 22,
	  "public_gists": 0,
	  "followers": 6,
	  "following": 0,
	  "created_at": "2018-09-21T08:45:50Z",
	  "updated_at": "2023-09-19T05:09:36Z"
	}))
	.unwrap()
}

#[fixture]
pub fn ofux() -> User {
	serde_json::from_value(json!({
	  "login": "ofux",
	  "id": 595505,
	  "node_id": "MDQ6VXNlcjU5NTUwNQ==",
	  "avatar_url": "https://avatars.githubusercontent.com/u/595505?v=4",
	  "gravatar_id": "",
	  "url": "https://api.github.com/users/ofux",
	  "html_url": "https://github.com/ofux",
	  "followers_url": "https://api.github.com/users/ofux/followers",
	  "following_url": "https://api.github.com/users/ofux/following{/other_user}",
	  "gists_url": "https://api.github.com/users/ofux/gists{/gist_id}",
	  "starred_url": "https://api.github.com/users/ofux/starred{/owner}{/repo}",
	  "subscriptions_url": "https://api.github.com/users/ofux/subscriptions",
	  "organizations_url": "https://api.github.com/users/ofux/orgs",
	  "repos_url": "https://api.github.com/users/ofux/repos",
	  "events_url": "https://api.github.com/users/ofux/events{/privacy}",
	  "received_events_url": "https://api.github.com/users/ofux/received_events",
	  "type": "User",
	  "site_admin": false,
	  "name": "Olivier Fuxet",
	  "company": "@onlydustxyz",
	  "blog": "",
	  "location": "Paris, France",
	  "email": null,
	  "hireable": null,
	  "bio": "Web3, Cloud, Unity3D",
	  "twitter_username": "fuxeto",
	  "public_repos": 44,
	  "public_gists": 1,
	  "followers": 20,
	  "following": 5,
	  "created_at": "2011-02-01T20:08:09Z",
	  "updated_at": "2023-07-18T14:10:32Z"
	}))
	.unwrap()
}

#[fixture]
pub fn pierre() -> User {
	serde_json::from_value(json!({
	  "login": "ilysse",
	  "id": 63659897,
	  "node_id": "MDQ6VXNlcjYzNjU5ODk3",
	  "avatar_url": "https://avatars.githubusercontent.com/u/63659897?v=4",
	  "gravatar_id": "",
	  "url": "https://api.github.com/users/ilysse",
	  "html_url": "https://github.com/ilysse",
	  "followers_url": "https://api.github.com/users/ilysse/followers",
	  "following_url": "https://api.github.com/users/ilysse/following{/other_user}",
	  "gists_url": "https://api.github.com/users/ilysse/gists{/gist_id}",
	  "starred_url": "https://api.github.com/users/ilysse/starred{/owner}{/repo}",
	  "subscriptions_url": "https://api.github.com/users/ilysse/subscriptions",
	  "organizations_url": "https://api.github.com/users/ilysse/orgs",
	  "repos_url": "https://api.github.com/users/ilysse/repos",
	  "events_url": "https://api.github.com/users/ilysse/events{/privacy}",
	  "received_events_url": "https://api.github.com/users/ilysse/received_events",
	  "type": "User",
	  "site_admin": false,
	  "name": null,
	  "company": null,
	  "blog": "",
	  "location": null,
	  "email": null,
	  "hireable": null,
	  "bio": null,
	  "twitter_username": null,
	  "public_repos": 0,
	  "public_gists": 0,
	  "followers": 1,
	  "following": 0,
	  "created_at": "2020-04-14T15:53:37Z",
	  "updated_at": "2020-06-17T20:02:16Z"
	}))
	.unwrap()
}
