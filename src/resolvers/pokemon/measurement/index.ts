import { MetaPokemon } from "..";
import { MetaMeasurement } from "../../measurement";

export const getMeasurement = (parent: MetaPokemon): MetaMeasurement => {
  const { height, weight } = parent?._meta?.pokemonDetails ?? {};
  return {
    _meta: {
      height,
      weight,
    },
  };
};
