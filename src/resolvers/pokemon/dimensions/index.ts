import { MetaPokemon } from "..";
import { MetaDimensions } from "../../dimensions";

export const getDimensions = (parent: MetaPokemon): MetaDimensions => {
  const { height, weight } = parent?._meta?.pokemonDetails ?? {};
  return {
    _meta: {
      height,
      weight,
    },
  };
};
