import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export class Repo {
    readonly owner: string;
    readonly name: string;

    constructor(owner: string, name:string) {
        this.owner = owner;
        this.name = name;
    }

    readme = () => octokit.rest.repos.getReadme({ owner: this.owner, repo: this.name }).then(({data}) => atob(data.content)).catch(console.error)

    details = () => octokit.rest.repos.get({ owner: this.owner, repo: this.name }).then(({data}) => data).catch(console.error)
}
