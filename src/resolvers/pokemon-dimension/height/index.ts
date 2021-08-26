import { MetaPokemonDimensions } from "..";

export const getHeight = (parent: MetaPokemonDimensions): string | null =>
  parent?._meta?.height?.toString() ?? null;
