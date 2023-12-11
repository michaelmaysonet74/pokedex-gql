import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaPokemonCategoryArgs } from "../../../schema-types";

export const getCategory = async (
  parent: MetaPokemon,
  args: SchemaPokemonCategoryArgs,
  ctx: ResolverContext
): Promise<string | null> => {
  const { id } = parent;
  // const { language: maybeLanguage } = args;

  const {
    dataSources: { pokeAPI },
    // helpers: { filterByLanguage, sanitizeString },
  } = ctx;

  const species = await pokeAPI.getPokemonSpeciesById(id);

  return (
    species?.genera?.find((_) => (_.language?.name ?? "en") === "en")?.genus ??
    null
  );
};
