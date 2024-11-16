import { CodegenConfig } from "@graphql-codegen/cli";

import { API_URL } from "./constants/api";

const config: CodegenConfig = {
  schema: API_URL,
  documents: ["./gql/queries.ts", "./gql/mutations/*.ts"],
  generates: {
    "./gql/_generated/": {
      preset: "client",
      plugins: [
        // don't need to add plugins when using the client preset
      ],
      config: {
        withHooks: true,
        withComponent: false,
        futureProofEnums: true,
      },
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false,
      },
    },
  },
};

export default config;
