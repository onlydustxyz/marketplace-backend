import dotenv from "dotenv";
import fs from "fs";
import { Repo } from "./github/index.js";
import { LLM } from "./llm.js";
import { createClient } from "./onlydust/graphql.js";
import { GetProjectReposDocument, GetProjectReposQuery } from "./__generated/onlydust/graphql.js";
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

  const model = new LLM();

  const promises = project.githubRepos.map(async ({ repo }) => {
    const spinner = new Spinner({ name: "line" }).start("Generating documentation", {
      withPrefix: `[${repo?.owner}/${repo?.name}] `,
    });

    const githubRepo = new Repo(repo?.owner || "", repo?.name || "");
    const purpose = await model.repoPurpose(githubRepo, { spinner });
    const contributionGuidelines = await model.repoGuidelines(githubRepo, { spinner });
    const discussions = await model.repoDiscussions(githubRepo, { spinner });

    spinner.succeed();

    return {
      ...repo,
      purpose,
      contributionGuidelines,
      discussions,
    };
  });

  const repos = await Promise.all(promises);

  const projectOverview = await model.summarizeOverviews(
    repos.map(({ purpose }) => purpose),
    { spinner }
  );

  const projectContributionGuidelines = await model.summarizeGuidelines(
    repos.map(({ contributionGuidelines }) => contributionGuidelines),
    { spinner }
  );

  const projectChallenges = await model.summarizeDiscussions(repos.map(({ discussions }) => discussions).flat(), {
    spinner,
  });

  const definitions = await model.explainTechnicalTerms(
    [projectOverview, ...repos.map(({ purpose }) => purpose)].join("\n"),
    { spinner }
  );

  fs.mkdir("out", { recursive: true }, err => {
    if (err) throw err;
  });

  fs.writeFileSync(
    `out/${project.projectDetails?.name}.md`,
    `# ${project.projectDetails?.name}

## 🧠 Purpose
${projectOverview}

## 💪 Recent challenges
${projectChallenges}

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
