import { MetaEvolutionFrom } from "..";
import { getTitle } from "../../../helpers";

export const getName = async (
  parent: MetaEvolutionFrom
): Promise<string | null> => {
  const { name } = parent?._meta?.evolutionFromSpecies ?? {};
  return name ? getTitle({ str: name }) : null;
};
