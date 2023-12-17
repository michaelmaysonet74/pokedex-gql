import { getCategory } from ".";
import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import { PokemonDataSources } from "../../../data-sources";
import { PokeAPI } from "../../../data-sources/poke-api";
import helpers from "../../../helpers";
import { fakePokemonSpecies } from "../../../fixtures/data-sources/pokemon-species";

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

describe("Pokemon.category", () => {
  it("should return category by default language", async () => {
    const expectedResult = "Tiny Turtle";
    const result = await getCategory(baseParent, {}, baseContext);
    expect(result).toEqual(expectedResult);
  });

  it("should return null if category is not found", async () => {
    jest
      .spyOn(basePokeAPI, "getPokemonSpeciesById")
      .mockResolvedValueOnce(undefined);

    const result = await getCategory(baseParent, {}, baseContext);
    expect(result).toBeNull();
  });
});
