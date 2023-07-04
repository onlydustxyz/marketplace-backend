import { CodegenConfig } from "@graphql-codegen/cli";

const getHasuraUrl = () => process.env.HASURA_URL ?? "http://localhost:8080/v1/graphql";
const getHasuraSecretKey = () => process.env.HASURA_SECRET_KEY ?? "myadminsecretkey";

const config: CodegenConfig = {
  schema: [
    {
      [getHasuraUrl()]: {
        headers: { "X-Hasura-Admin-Secret": getHasuraSecretKey() },
      },
    },
  ],
  overwrite: true,
  documents: ["src/**/*.graphql"],
  emitLegacyCommonJSImports: false,
  generates: {
    "./src/__generated/": {
      preset: 'client'
    },
  },
};

export default config;
