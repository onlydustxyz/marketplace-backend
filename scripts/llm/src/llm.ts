import { OpenAI } from "langchain/llms/openai";
import { ConversationChain, LLMChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { PromptTemplate } from "langchain/prompts";
import { Repo, RepoFileContentTool } from "./github.js";
import { Options } from "./options.js";
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
  const repoReadme = ((await repo.readme()) || "").substring(0, 15000);

  spinner.text = "Asking for the repo purpose";
  await chain.call({
    input: await prompt.format({
      owner: repo.owner,
      name: repo.name,
      description: repoDetails ? repoDetails.description : "",
      readme: repoReadme,
    }),
  });

  spinner.text = "Refining the purpose";
  const { response } = await chain.call({
    input:
      "Give me a summary of your answer in less than 300 characters. Do not mention the repository name in the response. Write the result in markdown format.",
  });

  return response;
}

export async function explainTechnicalTerms(overview: string, { spinner }: Options) {
  spinner.text = "Explaining technical terms";

  const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.3, modelName: "gpt-3.5-turbo" });

  const tools = [new SerpAPI(process.env.SERP_API_KEY)];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
    verbose: !!process.env.DEBUG,
  });

  const prompt = new PromptTemplate({
    template: `Define the complex technical terms of the following overview: {overview}.
        Reply only with the list of terms and their definitions in markdown format.
        Add links to internet resources to get more details on each term.
        `,
    inputVariables: ["overview"],
  });

  const { output } = await executor.call({ input: await prompt.format({ overview }) });

  return output;
}

export async function getRepoGuidelines(repo: Repo, { spinner }: Options) {
  const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.3, modelName: "gpt-4" });
  const tools = [new RepoFileContentTool(repo)];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
    verbose: !!process.env.DEBUG,
  });

  const prompt = new PromptTemplate({
    template: `
        Give a summary of the contribution gidelines of the {owner}/{name} github repository. Contribution guidelines describe how a
        developer should contribute to the repository.

        The list of files that may contain information about contribution gidelines is:
        {files}

        Analyse the content of each file until you find the contribution guidelines and write a summary of it.
        If you don't find anything related to this, reply "There doesn't seem to be any contribution guidelines.".
        `,
    inputVariables: ["owner", "name", "files"],
  });

  const repoDescriptionFiles = (await repo.files(true))
    .filter(
      path =>
        path?.toLowerCase().endsWith(".md") ||
        path?.toLowerCase().endsWith(".txt") ||
        path?.toLowerCase().includes("contribut") ||
        path?.toLowerCase().includes("develop") ||
        path?.toLowerCase().includes("guideline") ||
        path?.toLowerCase().includes("conduct")
    )
    .slice(0, 100)
    .map(text => text.trim());

  if (!repoDescriptionFiles.some(text => text.length > 0)) {
    return null;
  }

  spinner.text = "Asking for the repo contribution guidelines";
  const { output } = await executor.call({
    input: await prompt.format({ owner: repo.owner, name: repo.name, files: repoDescriptionFiles }),
  });

  return output;
}

export async function summarizeOverviews(texts: string[], { spinner }: Options) {
  texts = texts.map(text => text.trim());
  if (!texts.some(text => text.length > 0)) {
    return null;
  }

  const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.3, modelName: "gpt-4" });

  const prompt = new PromptTemplate({
    template: `
        Explain the purpose of the project based on the description of its inner github repositories.
        Write the response in markdown format in a maximum of 300 words.
        Descriptions: {texts}
    `,
    inputVariables: ["texts"],
  });

  const memory = new BufferMemory();
  const chain = new ConversationChain({ llm: model, memory });

  spinner.text = "Summarizing overviews";
  const { response } = await chain.call({ input: await prompt.format({ texts: texts.join("\n") }) });

  return response;
}

export async function summarize(texts: string[], { spinner }: Options) {
  texts = texts.map(text => text.trim());
  if (!texts.some(text => text.length > 0)) {
    return null;
  }

  const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.3, modelName: "gpt-4" });

  const prompt = new PromptTemplate({
    template: `
          Write the contribution guidelines of this project based on the guidelines of its inner github repositories.
          Write the response in markdown format.
          Guidelines: {texts}
        `,
    inputVariables: ["texts"],
  });

  const memory = new BufferMemory();
  const chain = new ConversationChain({ llm: model, memory });

  spinner.text = "Summarizing contribution guidelines";
  const { response } = await chain.call({ input: await prompt.format({ texts: texts.join("\n") }) });

  return response;
}
