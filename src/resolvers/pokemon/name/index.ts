import { MetaPokemon } from "..";
import { getTitle } from "../../../helpers";

export const getName = (parent: MetaPokemon): string | null => {
  const { name } = parent?._meta?.pokemonDetails ?? {};
  return name ? getTitle({ str: name }) : null;
};
