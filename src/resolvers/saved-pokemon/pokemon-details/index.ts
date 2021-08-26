import { SchemaPokemon, SchemaSavedPokemon } from "../../../schema-types";
import { ResolverContext } from "../../../context/types";

export const getPokemonDetails = async (
  parent: SchemaSavedPokemon,
  args: null,
  { dataSources: { pokeAPI } }: ResolverContext
): Promise<SchemaPokemon | null> => {
  const pokemonDetails = await pokeAPI.getPokemonById(parent.id);

  return pokemonDetails?.id
    ? ({
        id: pokemonDetails?.id.toString(),
        _meta: {
          pokemonDetails,
        },
      } as SchemaPokemon)
    : null;
};
