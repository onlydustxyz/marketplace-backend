import dotenv from 'dotenv';
import fs from 'fs';
import { Repo } from "./github.js";
import { explainTechnicalTerms, getRepoGuidelines, getRepoOverview, joinDefinitions, summarize } from "./llm.js";
import { createClient } from "./graphql/client.js";
import { GetProjectReposDocument, GetProjectReposQuery } from "./__generated/graphql.js"
import { Spinner } from "@topcli/spinner";

dotenv.config();

async function main() {
    const projectName = process.argv[2];

    const client = createClient();
    const {data} = await client.query<GetProjectReposQuery>({
        query: GetProjectReposDocument,
        variables:{ projectName: `%${projectName}%` }
    });

    const project = data.projects.at(0);
    if (!project) {
        throw new Error(`No project found matching request: ${projectName}`);
    }

    const spinner = new Spinner().start("Generating documentation", { withPrefix: `[${project.projectDetails?.name}] ` });

    const promises = project.githubRepos.map(async ({repo}) => {
        const spinner = new Spinner().start("Generating documentation", { withPrefix: `[${repo?.owner}/${repo?.name}] `});

        const githubRepo = new Repo(repo?.owner || "", repo?.name || "");
        const purpose = await getRepoOverview(githubRepo, { spinner });
        const definitions = await explainTechnicalTerms(purpose, { spinner });
        const contributionGuidelines = await getRepoGuidelines(githubRepo, { spinner });

        spinner.succeed();

        return {
            ...repo,
            purpose,
            definitions,
            contributionGuidelines
        };
    });

    const repos = await Promise.all(promises);

    const projectOverview = await summarize(repos.map(({purpose}) => purpose), { spinner });
    const projectContributionGuidelines = await summarize(repos.map(({contributionGuidelines}) => contributionGuidelines), { spinner });
    const projectDefinitions = await joinDefinitions(repos.map(({definitions}) => definitions), { spinner });

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

#### 1. Purpose
${repo.purpose}

#### 2. Definitions
${repo.definitions}

#### 3. Contribution guidelines
${repo.contributionGuidelines}

`)}`);

    spinner.succeed();
}

main()
