import { savePokemons } from "./save-pokemons";
import { deletePokemons } from "./delete-pokemons";

const MutationResolver = {
  savePokemons,
  deletePokemons,
};

export default MutationResolver;
