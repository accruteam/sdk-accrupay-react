import dotenv from "dotenv";
import { CodegenConfig } from "@graphql-codegen/cli";

dotenv.config({ quiet: true });

const config: CodegenConfig & Record<string, any> = {
  schema:
    process?.env?.BACKEND_GRAPHQL_ENDPOINT || "http://localhost:3334/graphql",
  documents: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "!./src/**/*.{test,spec}.{ts,tsx,js,jsx}",
  ],
  generates: {
    "./src/api/gql/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./src/api/gql/schema.graphql.json": {
      plugins: ["introspection"],
      config: {
        minify: true,
      },
    },
    "./src/api/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false,
      },
      config: {
        namingConvention: "keep",
        scalars: {
          BigInt: "bigint",
          DateTimeISO: "Date",
        },
      },
    },
  },
  ignoreNoDocuments: true,
  inputValueDeprecation: true,
};

export default config;
