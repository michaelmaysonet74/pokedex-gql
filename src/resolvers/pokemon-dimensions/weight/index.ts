import { MetaPokemonDimensions } from "..";

export const getWeight = (parent: MetaPokemonDimensions): string | null =>
  parent?._meta?.weight?.toString() ?? null;
