import { getPokemonById } from "./pokemon-by-id";
import { getPokemonByName } from "./pokemon-by-name";

const QueryResolver = {
  pokemonById: getPokemonById,
  pokemonByName: getPokemonByName,
};

export default QueryResolver;
