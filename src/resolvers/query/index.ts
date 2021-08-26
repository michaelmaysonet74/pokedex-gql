import { getPokemonById } from "./pokemon-by-id";
import { getSavedPokemons } from "./saved-pokemons";

const QueryResolver = {
  pokemonById: getPokemonById,
  savedPokemons: getSavedPokemons,
};

export default QueryResolver;
