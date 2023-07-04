import { OpenAI } from "langchain/llms/openai";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { PromptTemplate } from "langchain/prompts";
import { Repo } from "./github";
import { Options } from "./options";

export async function getRepoOverview(repo: Repo, { spinner }: Options) {
    const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.9, modelName: "gpt-4" });

    const prompt = new PromptTemplate({
        template: `
        Tell me the purpose of the {owner}/{name} github repository based on its README file and Github description.
        The github description is: "{description}".
        The content of the README file is:

        {readme}
        `,
        inputVariables: ["owner", "name", "description", "readme"],
    });

    const memory = new BufferMemory();
    const chain = new ConversationChain({ llm: model, memory });

    const repoDetails = await repo.details();
    const repoReadme = await repo.readme();

    spinner.suffixText = "Asking for the repo purpose";
    await chain.call({ input: await prompt.format({ owner: repo.owner, name: repo.name, description: repoDetails ? repoDetails.description : "", readme: repoReadme }) });

    spinner.suffixText = "Refining the purpose";
    const { response } = await chain.call({ input: "Give me a summary of your answer in less than 300 characters. Write the result in markdown format." });

    return response;
}
