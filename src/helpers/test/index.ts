import { ApolloServer } from "apollo-server-express";
import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import schema from "../../schema";
import { PokemonDataSources } from "../../data-sources";
import { RequestContext } from "../../context/types";

export const testBaseURL = "https://www.test.com";

export const baseDataSources = {};

export const baseRequestContext = {};

export const baseResolverContext = {
  ...baseRequestContext,
  dataSources: baseDataSources,
};

export interface TestServerConfig {
  testContext: RequestContext;
  testDataSources: DataSources<PokemonDataSources>;
}

export const createTestServer = (
  config: Partial<TestServerConfig> = {}
): ApolloServer => {
  const {
    testContext = baseRequestContext,
    testDataSources = baseDataSources,
  } = config;

  return new ApolloServer({
    schema,
    dataSources: () => testDataSources,
    context: () => testContext,
  });
};
