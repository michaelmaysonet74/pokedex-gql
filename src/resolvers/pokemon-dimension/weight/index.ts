import { MetaPokemonDimension } from "..";

export const getWeight = (parent: MetaPokemonDimension): string | null =>
  parent?._meta?.weight?.toString() ?? null;
