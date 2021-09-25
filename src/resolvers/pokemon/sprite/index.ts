import { MetaPokemon } from "..";

export const getSprite = (parent: MetaPokemon): string | null =>
  parent?._meta?.pokemonDetails?.sprites?.front_default ?? null;
