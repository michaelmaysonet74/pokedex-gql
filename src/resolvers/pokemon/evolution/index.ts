import { MetaPokemon } from "..";
import { SchemaEvolution } from "../../../schema-types";
import { ResolverContext } from "../../../context/types";
import { PokemonEvolution } from "../../../data-sources/poke-api/models/pokemon-evolution";

export const getEvolution = async (
  { id }: MetaPokemon,
  _: null,
  { dataSources: { pokeAPI } }: ResolverContext
): Promise<SchemaEvolution | null> => {
  const { evolution_chain } = (await pokeAPI.getPokemonSpeciesById(id)) ?? {};
  const { url } = evolution_chain ?? {};

  if (!url) {
    return null;
  }

  const pokemonEvolution: PokemonEvolution | null =
    await pokeAPI.getPokemonEvolution(url);

  const { evolution_details } = pokemonEvolution?.chain?.evolves_to ?? {};
  return {
    _meta: {
      evolutionDetails: evolution_details,
    },
  } as SchemaEvolution;
};
