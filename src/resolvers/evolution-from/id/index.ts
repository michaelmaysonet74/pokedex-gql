import { MetaEvolutionFrom } from "..";
import { getIdFromUrl } from "../../../helpers/id-from-url";

export const getId = (parent: MetaEvolutionFrom): string | null => {
  const { url } = parent?._meta?.evolutionFromSpecies ?? {};
  return url ? getIdFromUrl({ url }) : null;
};
