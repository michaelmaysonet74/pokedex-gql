import { MetaPokemon } from "..";
import { SchemaPokemonDimension } from "../../../schema-types";

export const getDimensions = (parent: MetaPokemon): SchemaPokemonDimension => {
  const { height, weight } = parent?._meta?.pokemonDetails ?? {};
  return {
    _meta: {
      height,
      weight,
    },
  } as SchemaPokemonDimension;
};
