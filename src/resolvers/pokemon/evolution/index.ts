import { MetaPokemon } from "..";
import { SchemaEvolutionChain } from "../../../schema-types";

export const getEvolution = (parent: MetaPokemon): SchemaEvolutionChain =>
  ({
    _meta: {
      pokemonId: parent.id,
    },
  } as SchemaEvolutionChain);
