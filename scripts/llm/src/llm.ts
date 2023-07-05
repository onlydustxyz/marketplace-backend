import { OpenAI } from "langchain/llms/openai";
import { ConversationChain, LLMChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { PromptTemplate } from "langchain/prompts";
import { Repo, RepoFileContentTool } from "./github.js";
import { Options } from "./options.js";
import { SerpAPI } from "langchain/tools";
import { initializeAgentExecutorWithOptions } from "langchain/agents";

export class LLM {
  private readonly model: OpenAI;

  constructor() {
    this.model = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.3,
      modelName: "gpt-4",
    });
  }

  repoPurpose = async (repo: Repo, { spinner }: Options) => {
    const repoDetails = await repo.details();
    const description = repoDetails && repoDetails.description;
    const readme = ((await repo.readme()) || "").substring(0, 15000);

    spinner.text = "Generating repository purpose";
    return await this.model.call(`
      Explain the purpose of ${repo.name} github repository.
      Do not include the repository name in the response.
      Answer with less than 100 words.
      Description: "${description}"
      Documentation: ${readme}
    `);
  };

  explainTechnicalTerms = async (overview: string, { spinner }: Options) => {
    const tools = [new SerpAPI(process.env.SERP_API_KEY)];

    const executor = await initializeAgentExecutorWithOptions(tools, this.model, {
      agentType: "zero-shot-react-description",
      verbose: !!process.env.DEBUG,
    });

    spinner.text = "Generating definitions";
    const { output } = await executor.call({
      input: `
      Define the technical terms in the following text.
      Only focus on the complex terms a senior developer is not expected to know.
      Reply only with the terms and their definitions as a list in markdown format.
      Add links to internet resources to get more details on each term.
      Text:
      ${overview}
    `,
    });

    return output;
  };

  summarizeOverviews = async (texts: string[], { spinner }: Options) => {
    texts = texts.map(text => text.trim()).filter(text => text.length > 0);
    if (texts.length === 0) {
      return null;
    }

    spinner.text = "Summarizing overviews";
    return await this.model.call(`
      Write a summary of the following project description.
      Answer with less than 300 words.
      Descriptions:
      ${texts.join("\n")}
    `);
  };

  repoGuidelines = async (repo: Repo, { spinner }: Options) => {
    const tools = [new RepoFileContentTool(repo)];

    const executor = await initializeAgentExecutorWithOptions(tools, this.model, {
      agentType: "zero-shot-react-description",
      verbose: !!process.env.DEBUG,
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
      input: `
        Examine the ${repo.owner}/${repo.name} GitHub repository's contribution guidelines.
        Contribution guidelines describe how a developer should contribute to the repository.

        The list of files that may contain information about contribution guidelines is:
        ${repoDescriptionFiles}

        Extract and summarize the specific instructions or guidelines for contributions present in these files.
        If there are no contribution guidelines, simply state, 'There doesn't seem to be any contribution guidelines.'

        Write in affirmative style.
        Write guidelines in bullet points.
        `,
    });

    return output;
  };

  summarizeGuidelines = async (texts: string[], { spinner }: Options) => {
    texts = texts.map(text => text.trim()).filter(text => text.length > 0);
    if (texts.length === 0) {
      return null;
    }

    spinner.text = "Summarizing contribution guidelines";
    return await this.model.call(`
        Here is a list of guidelines:
        ${texts.join("\n")}

        Remove duplicate bullet points from the list above.
        Keep only the 4 most important and relevant bullet points.
        Do not add any introductory text before the bullet points.
    `);
  };

  repoDiscussions = async (repo: Repo, { spinner }: Options) => {
    spinner.text = "Summarizing main discussions";

    const mostCommentedIssues = await repo.mostCommentedIssues();
    const explainations = await Promise.all(
      mostCommentedIssues.slice(0, 5).map(async issue => {
        const comments = "-" + (await repo.issueComments(issue.number)).map(comment => comment.body || "").join("\n- ");
        const explaination = await this.model.call(`
        Based on the tilte, the description of a github issue and the list of its comments:
        - tell what the github issue is about
        - give the main challenge involved by this github issue

        The issue title is: "${issue.title || ""}"

        The issue description is: "${issue.body || ""}"

        The issue comments are:
        ${comments}
      `);
        return { issue: issue.title, explaination };
      })
    );

    return explainations;
  };
}
