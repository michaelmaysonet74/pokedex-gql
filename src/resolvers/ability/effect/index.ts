import { MetaAbility } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaAbilityEffectArgs } from "../../../schema-types";

export const getEffect = async (
  parent: MetaAbility,
  args: SchemaAbilityEffectArgs,
  ctx: ResolverContext
): Promise<string | null> => {
  const { url } = parent?._meta?.ability ?? {};

  if (!url) return null;

  const {
    dataSources: { pokeAPI },
    helpers: { filterByLanguage, idsFromUrl, sanitizeString },
  } = ctx;

  const { language: maybeLanguage } = args;
  const byLanguage = filterByLanguage({ filter: maybeLanguage });

  try {
    const abilityId = idsFromUrl({ url })?.[0];

    const { flavor_text_entries = [] } =
      (await pokeAPI.getPokemonAbilityEffectById(parseInt(abilityId))) ?? {};

    const entry = flavor_text_entries
      .filter((_) => byLanguage(_.language))
      .map(({ flavor_text }) => flavor_text)?.[0];

    return entry ? sanitizeString({ str: entry }) : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};
