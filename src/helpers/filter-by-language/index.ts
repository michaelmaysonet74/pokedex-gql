import { EntryLanguage } from "../../data-sources/poke-api/models/flavor-text-entry";
import { Maybe, SchemaLanguage } from "../../schema-types";

interface FilterByLanguageParams {
  filter?: Maybe<SchemaLanguage>;
}

export type FilterByLanguage = (
  p: FilterByLanguageParams
) => (el: EntryLanguage) => boolean;

const DEFAULT_LANGUAGE = SchemaLanguage.en;

export const getFilterByLanguage =
  ({ filter }: FilterByLanguageParams): ((el: EntryLanguage) => boolean) =>
  (language) =>
    language.name === (filter ?? DEFAULT_LANGUAGE).toString();
