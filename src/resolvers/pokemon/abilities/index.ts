import { MetaPokemon } from "..";
import { getTitle } from "../../../helpers";

export const getAbilities = (parent: MetaPokemon): string[] =>
  parent?._meta?.pokemonDetails?.abilities?.map(({ ability }) =>
    getTitle({ str: ability.name })
  ) ?? [];
