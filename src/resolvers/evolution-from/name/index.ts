import { MetaEvolutionFrom } from "..";
import { getTitle } from "../../../helpers";

export const getName = (parent: MetaEvolutionFrom): string | null => {
  const { name } = parent?._meta?.evolutionFromSpecies ?? {};
  return name ? getTitle({ str: name }) : null;
};
