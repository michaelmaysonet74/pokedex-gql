import { PokemonDataSources } from "../data-sources";

export interface RequestContext {
  authToken: string;
}

export interface ResolverContext extends RequestContext {
  dataSources: PokemonDataSources;
}
