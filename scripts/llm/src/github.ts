import { Octokit } from "@octokit/rest";
import { Callbacks, CallbackManagerForToolRun } from "langchain/dist/callbacks";
import { SerializedFields } from "langchain/dist/load/map_keys";
import { Serialized, SerializedNotImplemented } from "langchain/dist/load/serializable";
import { Tool } from "langchain/tools";
import { ZodEffects, ZodObject, ZodOptional, ZodString, ZodTypeAny, input } from "zod";
import { components } from "@octokit/openapi-types";

type FileItem = components["schemas"]["content-file"];

export class Repo {
  readonly octokit: Octokit;
  readonly owner: string;
  readonly name: string;

  constructor(owner: string, name: string) {
    this.octokit = new Octokit({ auth: process.env.GITHUB_PAT });
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

  files = (recursive: boolean) =>
    this.octokit.rest.git
      .getTree({ owner: this.owner, repo: this.name, tree_sha: "main", recursive: recursive ? "1" : "0" })
      .then(({ data }) => data.tree.map(item => item.path || "").filter(path => path !== ""))
      .catch(e => {
        console.error(e);
        return [];
      });

  fileContent = (path: string) =>
    this.octokit.rest.repos
      .getContent({ owner: this.owner, repo: this.name, path })
      .then(({ data }) => (isFileItem(data) ? atob(data.content) : ""))
      .catch(e => {
        console.error(e);
        return "";
      });
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
