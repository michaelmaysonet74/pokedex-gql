import { FlavorTextEntry } from "../../data-sources/poke-api/models/flavor-text-entry";
import { Maybe, SchemaLanguage } from "../../schema-types";

interface FilterByLanguageParams {
  filter?: Maybe<SchemaLanguage>;
}

export type FilterByLanguage = (
  p: FilterByLanguageParams
) => (e: FlavorTextEntry) => boolean;

const DEFAULT_LANGUAGE = SchemaLanguage.en;

export const getFilterByLanguage =
  ({ filter }: FilterByLanguageParams): ((e: FlavorTextEntry) => boolean) =>
  ({ language }) =>
    language.name === (filter ?? DEFAULT_LANGUAGE).toString();
