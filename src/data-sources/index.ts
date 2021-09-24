import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import { PokeAPI } from "./poke-api";

export interface PokemonDataSources {
  pokeAPI: PokeAPI;
}

export const dataSources = (): DataSources<PokemonDataSources> => ({
  pokeAPI: new PokeAPI(),
});
