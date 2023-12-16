import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaPokemonCategoryArgs } from "../../../schema-types";

export const getCategory = async (
  parent: MetaPokemon,
  args: SchemaPokemonCategoryArgs,
  ctx: ResolverContext
): Promise<string | null> => {
  const { id } = parent;

  const {
    dataSources: { pokeAPI },
    helpers: { filterByLanguage, sanitizeString },
  } = ctx;

  const { language: maybeLanguage } = args;
  const byLanguage = filterByLanguage({ filter: maybeLanguage });

  const species = await pokeAPI.getPokemonSpeciesById(id);

  const generaByLanguage = species?.genera?.find(
    (_) => _.language && byLanguage(_.language)
  );

  const category = generaByLanguage?.genus?.replace("Pokémon", "") ?? null;

  return category ? sanitizeString({ str: category }) : null;
};
