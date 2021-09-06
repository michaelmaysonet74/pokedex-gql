import { MetaPokemon } from "..";
import { getCapitalized } from "../../../helpers";

export const getMoves = (parent: MetaPokemon): string[] =>
  parent?._meta?.pokemonDetails?.moves?.map(({ move }) =>
    getCapitalized({ str: move.name })
  ) ?? [];
