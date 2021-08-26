import { MetaPokemon } from "..";

export const getAbilities = (parent: MetaPokemon): string[] =>
  parent?._meta?.pokemonDetails?.abilities?.map(
    ({ ability }) => ability.name
  ) ?? [];
