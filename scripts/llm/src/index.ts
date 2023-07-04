import dotenv from 'dotenv';
import fs from 'fs';
import ora from "ora";
import { Repo } from "./github";
import { Options } from "./options";
import { explainTechnicalTerms, getRepoGuidelines, getRepoOverview, joinDefinitions, summarize } from "./llm";
import { createClient } from "./graphql/client";
import { GetProjectReposDocument, GetProjectReposQuery } from "./__generated/graphql"

dotenv.config();

async function main() {
    const projectName = process.argv[2];

    const options: Options = {
        spinner: ora({prefixText: `[${projectName}]`})
    };
    options.spinner?.start("Fetching project details");

    const client = createClient();
    const {data} = await client.query<GetProjectReposQuery>({
        query: GetProjectReposDocument,
        variables:{projectName}
    });

    const project = data.projects.at(0);
    if (!project) {
        throw new Error(`No project found matching request: ${projectName}`);
    }

    const repos = [];
    for (const repo of project.githubRepos.map(({repo}) => repo)) {
        options.spinner.prefixText = `[${repo?.owner}/${repo?.name}]`;

        const githubRepo = new Repo(repo?.owner || "", repo?.name || "");
        const purpose = await getRepoOverview(githubRepo, options);
        const definitions = await explainTechnicalTerms(purpose, options);
        const contributionGuidelines = await getRepoGuidelines(githubRepo, options);

        repos.push({
            ...repo,
            purpose,
            definitions,
            contributionGuidelines
        })
    }

    const projectOverview = await summarize(repos.map(({purpose}) => purpose), options);
    const projectContributionGuidelines = await summarize(repos.map(({contributionGuidelines}) => contributionGuidelines), options);
    const projectDefinitions = await joinDefinitions(repos.map(({definitions}) => definitions), options);

    fs.writeFileSync("project_description.md", `
# ${project.projectDetails?.name}

## 1. Purpose
${projectOverview}

## 2. Definitions
${projectDefinitions}

## 3. Contribution guidelines
${projectContributionGuidelines}

## 4. Repositories
${repos.map(repo => `
### ${repo.owner}/${repo.name}
${repo.purpose}


`)}`);

    options.spinner?.succeed();
}

main()
