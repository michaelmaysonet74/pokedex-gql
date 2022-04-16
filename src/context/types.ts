import { PokemonDataSources } from "../data-sources";
import { Helpers } from "../helpers";

export interface RequestContext {
  helpers: Helpers;
}

export interface ResolverContext extends RequestContext {
  dataSources: PokemonDataSources;
}
