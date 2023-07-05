import dotenv from "dotenv";
import fs from "fs";
import { Repo } from "./github.js";
import { explainTechnicalTerms, getRepoGuidelines, getRepoOverview, summarizeOverviews } from "./llm.js";
import { createClient } from "./graphql/client.js";
import { GetProjectReposDocument, GetProjectReposQuery } from "./__generated/graphql.js";
import { Spinner } from "@topcli/spinner";

dotenv.config();

async function main() {
  const projectName = process.argv[2];

  const client = createClient();
  const { data } = await client.query<GetProjectReposQuery>({
    query: GetProjectReposDocument,
    variables: { projectName: `%${projectName}%` },
  });

  const project = data.projects.at(0);
  if (!project) {
    throw new Error(`No project found matching request: ${projectName}`);
  }

  const spinner = new Spinner({ name: "line" }).start("Generating documentation", {
    withPrefix: `[${project.projectDetails?.name}] `,
  });

  const promises = project.githubRepos.map(async ({ repo }) => {
    const spinner = new Spinner({ name: "line" }).start("Generating documentation", {
      withPrefix: `[${repo?.owner}/${repo?.name}] `,
    });

    const githubRepo = new Repo(repo?.owner || "", repo?.name || "");
    const purpose = await getRepoOverview(githubRepo, { spinner });
    const contributionGuidelines = await getRepoGuidelines(githubRepo, { spinner });

    spinner.succeed();

    return {
      ...repo,
      purpose,
      contributionGuidelines,
    };
  });

  const repos = await Promise.all(promises);

  const projectOverview = await summarizeOverviews(
    repos.map(({ purpose }) => purpose),
    { spinner }
  );
  const projectContributionGuidelines = await summarizeOverviews(
    repos.map(({ contributionGuidelines }) => contributionGuidelines),
    { spinner }
  );

  const definitions = await explainTechnicalTerms(
    [projectOverview, ...repos.map(({ purpose }) => purpose)].join("\n"),
    { spinner }
  );

  fs.writeFileSync(
    `out/${project.projectDetails?.name}.md`,
    `# ${project.projectDetails?.name}

## 🧠 Purpose
${projectOverview}

## 🧑‍💻 Contribution guidelines
${projectContributionGuidelines}

## 📔 Repositories
${repos.map(repo => `__${repo.owner}/${repo.name}__: ${repo.purpose}`).join("\n\n")}

## 🔍 Definitions
${definitions}
`
  );

  spinner.succeed();
}

main();
