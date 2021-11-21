import { MetaPokemon } from "..";
import { SchemaEvolutionChain } from "../../../schema-types";

export const getEvolution = ({ id }: MetaPokemon): SchemaEvolutionChain =>
  ({
    _meta: {
      pokemonId: id,
    },
  } as SchemaEvolutionChain);
