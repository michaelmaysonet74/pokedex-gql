import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import { PokeAPI } from "./poke-api";
import { PokemonTypeChart } from "./pokemon-type-chart";

export interface PokemonDataSources {
  pokeAPI: PokeAPI;
  pokemonTypeChart: PokemonTypeChart;
}

export const dataSources = (): DataSources<PokemonDataSources> => ({
  pokeAPI: new PokeAPI(),
  pokemonTypeChart: new PokemonTypeChart(
    process.env.POKEMON_TYPE_CHART_BASE_URL
  ),
});
