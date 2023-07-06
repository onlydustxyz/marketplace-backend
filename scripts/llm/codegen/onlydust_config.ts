import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const hasuraSecret = process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? "myadminsecretkey";

const config: CodegenConfig = {
  schema: [
    {
      ["http://localhost:8080/v1/graphql"]: {
        headers: { "X-Hasura-Admin-Secret": hasuraSecret },
      },
    },
  ],
  overwrite: true,
  documents: ["src/onlydust/**/*.graphql"],
  emitLegacyCommonJSImports: false,
  generates: {
    "./src/__generated/onlydust/": {
      preset: "client",
    },
  },
};

export default config;
