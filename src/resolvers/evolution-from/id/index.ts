import { MetaEvolutionFrom } from "..";
import { getIdsFromUrl } from "../../../helpers/ids-from-url";

export const getId = (parent: MetaEvolutionFrom): string | null => {
  const { url } = parent?._meta?.evolutionFromSpecies ?? {};
  return url ? getIdsFromUrl({ url })?.[0] : null;
};
