import { MetaPokemon } from "..";
import { SchemaEvolutionChain } from "../../../schema-types";

export const getEvolution = (parent: MetaPokemon): SchemaEvolutionChain =>
  ({
    _meta: {
      pokemonId: parent.id,
      pokemonName: parent?._meta?.pokemonDetails?.name,
    },
  } as SchemaEvolutionChain);
