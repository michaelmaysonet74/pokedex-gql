import { MetaPokemon } from "..";
import { SchemaPokemonDimensions } from "../../../schema-types";

export const getDimensions = (parent: MetaPokemon): SchemaPokemonDimensions => {
  const { height, weight } = parent?._meta?.pokemonDetails ?? {};
  return {
    _meta: {
      height,
      weight,
    },
  } as SchemaPokemonDimensions;
};
