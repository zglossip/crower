import type { CodegenConfig } from '@graphql-codegen/cli';

//TODO Find out what all is going on here

const config: CodegenConfig = {
  overwrite: true,
  schema: "../src/main/resources/graphql/schema.graphqls",
  documents: "./src/graphql/**/*.graphql",
  generates: {
    "src/gql/graphql.ts": { // Generate a single file with a `.ts` extension
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-vue-apollo" // Plugin for Vue hooks
      ],
      config: {
        withHooks: true, // Generate hooks for Vue Apollo
        vueCompositionApiImportFrom: "@vue/apollo-composable", // Use Vue Apollo composable hooks
      },
    },
  },
};

export default config;
