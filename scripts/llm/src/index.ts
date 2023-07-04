import dotenv from 'dotenv';
import { Repo } from "./github";
import { Options } from "./options";
import ora from 'ora';
import { getRepoOverview } from "./llm";

dotenv.config();


async function main() {
    const options: Options = {
        spinner: ora()
    };

    const [owner, repo] = process.argv[2].split("/");
    options.spinner?.start(`[${owner}/${repo}]`);
    const response = await getRepoOverview(new Repo(owner, repo), options);
    options.spinner?.succeed();

    console.log(response);
}


main()
