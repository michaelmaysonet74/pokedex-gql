import { MetaPokemon } from "..";

export const getMoves = (parent: MetaPokemon): string[] =>
  parent?._meta?.pokemonDetails?.moves?.map(({ move }) => move.name) ?? [];
