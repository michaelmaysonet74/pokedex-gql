import { MetaEvolutionChain } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaEvolutionFrom } from "../../../schema-types";

export const getFrom = async (
  parent: MetaEvolutionChain,
  _: null,
  { dataSources: { pokeAPI } }: ResolverContext
): Promise<SchemaEvolutionFrom | null> => {
  const { pokemonId } = parent?._meta ?? {};

  if (!pokemonId) {
    return null;
  }

  const { evolves_from_species } =
    (await pokeAPI.getPokemonSpeciesById(pokemonId)) ?? {};

  return evolves_from_species
    ? ({
        _meta: {
          evolutionFromSpecies: evolves_from_species,
        },
      } as SchemaEvolutionFrom)
    : null;
};
