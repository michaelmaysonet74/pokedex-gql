import { SchemaSavedPokemon } from "../../../schema-types";
import { ResolverContext } from "../../../context/types";
import { MetaPokemon } from "../../pokemon";

export const getPokemonDetails = async (
  parent: SchemaSavedPokemon,
  args: null,
  { dataSources: { pokeAPI } }: ResolverContext
): Promise<MetaPokemon | null> => {
  const pokemonDetails = await pokeAPI.getPokemonById(parent.id);

  return pokemonDetails?.id
    ? {
        id: pokemonDetails?.id.toString(),
        _meta: {
          pokemonDetails,
        },
      }
    : null;
};
