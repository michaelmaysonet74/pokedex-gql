import { MetaPokemonDimension } from "..";

export const getHeight = (parent: MetaPokemonDimension): string | null =>
  parent?._meta?.height?.toString() ?? null;
