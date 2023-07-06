import { Octokit } from "@octokit/rest";
import { Tool } from "langchain/tools";
import { components } from "@octokit/openapi-types";
import { createClient } from "./graphql.js";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  GetRepoLatestDiscussionsDocument,
  GetRepoLatestDiscussionsQuery,
  GetRepoLatestDiscussionsQueryVariables,
} from "../__generated/github/graphql.js";

type FileItem = components["schemas"]["content-file"];

export class Repo {
  readonly octokit: Octokit;
  readonly graphqlClient: ApolloClient<NormalizedCacheObject>;
  readonly owner: string;
  readonly name: string;

  constructor(owner: string, name: string) {
    this.octokit = new Octokit({ auth: process.env.GITHUB_PAT });
    this.graphqlClient = createClient();
    this.owner = owner;
    this.name = name;
  }

  readme = () =>
    this.octokit.rest.repos
      .getReadme({ owner: this.owner, repo: this.name })
      .then(({ data }) => atob(data.content))
      .catch(console.error);

  details = () =>
    this.octokit.rest.repos
      .get({ owner: this.owner, repo: this.name })
      .then(({ data }) => data)
      .catch(console.error);

  defaultBranch = () =>
    this.octokit.rest.repos
      .get({ owner: this.owner, repo: this.name })
      .then(({ data }) => data.default_branch)
      .catch(e => {
        console.error(e);
        return "main";
      });

  files = (recursive: boolean) =>
    this.defaultBranch().then(defaultBranch =>
      this.octokit.rest.git
        .getTree({
          owner: this.owner,
          repo: this.name,
          tree_sha: defaultBranch,
          recursive: recursive ? "1" : "0",
        })
        .then(({ data }) => data.tree.map(item => item.path || "").filter(path => path !== ""))
        .catch(e => {
          console.error(e);
          return [];
        })
    );

  fileContent = (path: string) =>
    this.octokit.rest.repos
      .getContent({ owner: this.owner, repo: this.name, path })
      .then(({ data }) => (isFileItem(data) ? atob(data.content) : ""))
      .catch(e => {
        console.error(e);
        return "";
      });

  mostCommentedIssues = () =>
    this.octokit.rest.issues
      .listForRepo({
        owner: this.owner,
        repo: this.name,
        per_page: 100,
        page: 1,
        sort: "comments",
        direction: "desc",
        state: "open",
      })
      .then(({ data }) => data)
      .catch(e => {
        console.error(e);
        return [];
      });

  issueComments = (issueNumber: number) =>
    this.octokit.issues
      .listComments({
        owner: this.owner,
        repo: this.name,
        issue_number: issueNumber,
        per_page: 100,
        page: 1,
      })
      .then(({ data }) => data)
      .catch(e => {
        console.error(e);
        return [];
      });

  recentDiscussions = async () => {
    const { data } = await this.graphqlClient.query<
      GetRepoLatestDiscussionsQuery,
      GetRepoLatestDiscussionsQueryVariables
    >({
      query: GetRepoLatestDiscussionsDocument,
      variables: { owner: this.owner, name: this.name },
    });

    return (
      data.repository?.discussions.nodes?.map(d => ({
        author: d?.author?.login,
        title: d?.title,
        body: d?.body,
        comments:
          d?.comments.nodes?.map(c => ({
            author: c?.author?.login,
            body: c?.body,
          })) || [],
      })) || []
    );
  };
}

function isFileItem(data: unknown): data is FileItem {
  return (data as FileItem).content !== undefined;
}

export class RepoFileContentTool extends Tool {
  readonly name: string = "github-repo-file-content";
  readonly description: string =
    "a github repository file loader. useful for when you need to read the content of a specific file. input should be the path of the file within the repository.";

  readonly repo: Repo;

  constructor(repo: Repo) {
    super();
    this.repo = repo;
  }

  _call(path: string): Promise<string> {
    path = decodeURI(path).trim();
    if (path.toLowerCase().startsWith(this.repo.owner.toLowerCase())) {
      path = path.substring(this.repo.owner.length);
    }
    if (path.toLowerCase().startsWith("/")) {
      path = path.substring(1);
    }
    if (path.toLowerCase().startsWith(this.repo.name.toLowerCase())) {
      path = path.substring(this.repo.name.length);
    }
    if (path.toLowerCase().startsWith("/")) {
      path = path.substring(1);
    }
    return this.repo.fileContent(path).then(content => content.substring(0, 15000));
  }
}
