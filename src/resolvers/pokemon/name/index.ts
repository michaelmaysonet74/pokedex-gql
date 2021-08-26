import { MetaPokemon } from "..";

export const getName = (parent: MetaPokemon): string | null =>
  parent?._meta?.pokemonDetails?.name ?? null;
