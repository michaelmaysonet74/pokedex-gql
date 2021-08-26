import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import { PokeAPI } from "./poke-api";
import store, { Store } from "./store";

export interface PokemonDataSources {
  pokeAPI: PokeAPI;
  store: Store;
}

export const dataSources = (): DataSources<PokemonDataSources> => ({
  pokeAPI: new PokeAPI(),
  store,
});
