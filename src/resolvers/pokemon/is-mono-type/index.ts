import { MetaPokemon } from "..";

export const getIsMonoType = (parent: MetaPokemon): boolean | null => {
  const { types } = parent?._meta?.pokemonDetails ?? {};

  if (!types) {
    return null;
  }

  return types.length === 1;
};
