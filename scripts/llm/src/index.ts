import dotenv from 'dotenv';
import { Repo } from "./github";
import { Options } from "./options";
import ora from 'ora';
import { explainTechnicalTerms, getRepoOverview } from "./llm";
import fs from 'fs';

dotenv.config();

async function main() {
    const options: Options = {
        spinner: ora()
    };

    const [owner, repo] = process.argv[2].split("/");
    options.spinner?.start(`[${owner}/${repo}]`);

    const purpose = await getRepoOverview(new Repo(owner, repo), options);

    fs.writeFileSync("project_description.md", `
# ${repo}

## Purpose
${purpose}

## Definitions
${await explainTechnicalTerms(purpose, options)}
`);

    options.spinner?.succeed();
}


main()
