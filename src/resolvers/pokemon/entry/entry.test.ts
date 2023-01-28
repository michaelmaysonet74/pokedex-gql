import { getEntry } from ".";
import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import { PokemonDataSources } from "../../../data-sources";
import { PokeAPI } from "../../../data-sources/poke-api";
import helpers from "../../../helpers";
import {
  fakePokemonSpecies,
  fakeFlavorTextEntry,
  fakeFlavorTextEntry2,
  fakeFlavorTextEntry3,
  fakeFlavorTextEntry4,
} from "../../../fixtures/data-sources/pokemon-species";
import { SchemaGameVersion, SchemaLanguage } from "../../../schema-types";

const baseParent: MetaPokemon = {
  id: "7",
};

const basePokeAPI = {
  getPokemonSpeciesById: jest.fn().mockResolvedValue(fakePokemonSpecies),
} as unknown as PokeAPI;

const baseDataSources = {
  pokeAPI: basePokeAPI,
} as unknown as PokemonDataSources;

const baseContext = {
  dataSources: baseDataSources,
  helpers,
} as unknown as ResolverContext;

describe("Pokemon.entry", () => {
  it("should return entry by default language and default version", async () => {
    const expectedResult = fakeFlavorTextEntry.flavor_text;
    const result = await getEntry(baseParent, {}, baseContext);
    expect(result).toBe(expectedResult);
  });

  it("should return entry by default language and by provided version", async () => {
    const expectedResult = fakeFlavorTextEntry2.flavor_text;
    const result = await getEntry(
      baseParent,
      { version: SchemaGameVersion.yellow },
      baseContext
    );
    expect(result).toBe(expectedResult);
  });

  it("should return entry by provided language only", async () => {
    const expectedResult = fakeFlavorTextEntry3.flavor_text;
    const result = await getEntry(
      baseParent,
      { language: SchemaLanguage.es },
      baseContext
    );
    expect(result).toBe(expectedResult);
  });

  it("should return entry by provided language and by provided version", async () => {
    const expectedResult = fakeFlavorTextEntry4.flavor_text;
    const result = await getEntry(
      baseParent,
      { language: SchemaLanguage.es, version: SchemaGameVersion.yellow },
      baseContext
    );
    expect(result).toBe(expectedResult);
  });

  it("should return null if entry is not found", async () => {
    jest
      .spyOn(basePokeAPI, "getPokemonSpeciesById")
      .mockResolvedValueOnce({ id: 1, flavor_text_entries: [] });

    const result = await getEntry(baseParent, {}, baseContext);
    expect(result).toBeNull();
  });
});
