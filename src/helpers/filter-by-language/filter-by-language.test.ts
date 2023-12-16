import { getFilterByLanguage } from ".";
import { FlavorTextEntry } from "../../data-sources/poke-api/models/flavor-text-entry";
import { SchemaLanguage } from "../../schema-types";

const fakeFlavorTextEntry = {
  language: {
    name: "en",
  },
} as FlavorTextEntry;

const fakeFlavorTextEntry2 = {
  language: {
    name: "es",
  },
} as FlavorTextEntry;

const fakeFlavorTextEntries: FlavorTextEntry[] = [
  fakeFlavorTextEntry,
  fakeFlavorTextEntry2,
];

describe("getFilterByLanguage", () => {
  it("should filter by provided language", () => {
    const filterBySpanish = getFilterByLanguage({ filter: SchemaLanguage.es });
    const result = fakeFlavorTextEntries.filter((_) =>
      filterBySpanish(_.language)
    );
    expect(result.length).toEqual(1);
    expect(result).toEqual([fakeFlavorTextEntry2]);
  });

  it("should filter by default language", () => {
    const filterByDefault = getFilterByLanguage({});
    const result = fakeFlavorTextEntries.filter((_) =>
      filterByDefault(_.language)
    );
    expect(result.length).toEqual(1);
    expect(result).toEqual([fakeFlavorTextEntry]);
  });
});
