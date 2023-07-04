import { OpenAI } from "langchain/llms/openai";
import { ConversationChain, LLMChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { PromptTemplate } from "langchain/prompts";
import { Repo } from "./github";
import { Options } from "./options";
import { SerpAPI } from "langchain/tools";
import { initializeAgentExecutorWithOptions } from "langchain/agents";

export async function getRepoOverview(repo: Repo, { spinner }: Options) {
    const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.3, modelName: "gpt-4" });

    const prompt = new PromptTemplate({
        template: `
        Explain the purpose of the {owner}/{name} github repository based on its README file and Github description.
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
    const { response } = await chain.call({ input: "Give me a summary of your answer in less than 300 characters. Do not mention the repository name in the response. Write the result in markdown format." });

    return response;
}


export async function explainTechnicalTerms(overview:string, { spinner }: Options) {
    spinner.suffixText = "Explaining technical terms";

    const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.3, modelName: "gpt-3.5-turbo" });

    const tools = [new SerpAPI(process.env.SERP_API_KEY)];

    const executor = await initializeAgentExecutorWithOptions(tools, model, {
        agentType: "zero-shot-react-description",
        verbose: !!process.env.DEBUG
    });

    const prompt = new PromptTemplate({
        template: `Define the complex technical terms of the following overview: {overview}.
        Reply only with the list of terms and their definitions in markdown format.
        Add links to internet resources to get more details on each term.
        `,
        inputVariables: ["overview"],
    });

    const { output } = await executor.call({ input: await prompt.format({overview}) });

    return output;
}
