import { MetaPokemon } from "..";
import { getTitle } from "../../../helpers";

export const getMoves = (parent: MetaPokemon): string[] =>
  parent?._meta?.pokemonDetails?.moves?.map(({ move }) =>
    getTitle({ str: move.name })
  ) ?? [];
