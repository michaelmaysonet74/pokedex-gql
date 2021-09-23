import { MetaPokemon } from "..";
import {
  SchemaGameVersion,
  SchemaLanguage,
  SchemaPokemonEntryArgs,
} from "../../../schema-types";
import { ResolverContext } from "../../../context/types";

const DEFAULT_LANGUAGE = SchemaLanguage.en;
const DEFAULT_VERSION = SchemaGameVersion.blue;

export const getEntry = async (
  { id }: MetaPokemon,
  { language: maybeLanguage, version: maybeVersion }: SchemaPokemonEntryArgs,
  { dataSources: { pokeAPI } }: ResolverContext
): Promise<string | null> => {
  const _language = (maybeLanguage ?? DEFAULT_LANGUAGE).toString();
  const _version = (maybeVersion ?? DEFAULT_VERSION).toString();

  const { flavor_text_entries } = await pokeAPI.getPokemonSpeciesById(id);

  return (
    flavor_text_entries
      .filter(
        ({ language, version }) =>
          language.name === _language && version.name === _version
      )
      .map(({ flavor_text }) => flavor_text)?.[0] ?? null
  );
};
