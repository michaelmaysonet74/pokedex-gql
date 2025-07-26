import { ApolloServer } from "apollo-server-express";
import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import helpers from "..";
import { PokemonDataSources } from "../../data-sources";
import { RequestContext } from "../../context/types";
import { PokeAPI } from "../../data-sources/poke-api";
import { typeDefs, resolvers } from "../../resolvers";
import { PokemonTypeChart } from "../../data-sources/pokemon-type-chart";

export const baseDataSources = {
  pokeAPI: new PokeAPI(),
  pokemonTypeChart: new PokemonTypeChart(),
};

export const baseRequestContext = {
  helpers,
};

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
    typeDefs,
    resolvers,
    dataSources: () => testDataSources,
    context: () => testContext,
  });
};
