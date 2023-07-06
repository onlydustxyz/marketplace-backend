import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const githubGraphqlUrl = process.env.GITHUB_GRAPHQL_URL ?? "https://api.github.com/graphql";
const githubToken = process.env.GITHUB_PAT ?? "";

const config: CodegenConfig = {
  schema: [
    {
      [githubGraphqlUrl]: {
        headers: {
          "User-Agent": "codegen",
          Authorization: `token ${githubToken}`,
        },
      },
    },
  ],
  overwrite: true,
  documents: ["src/github/**/*.graphql"],
  emitLegacyCommonJSImports: false,
  generates: {
    "./src/__generated/github/": {
      preset: "client",
    },
  },
};

export default config;
