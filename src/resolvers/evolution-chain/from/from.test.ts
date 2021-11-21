import { getFrom } from ".";
import { MetaEvolutionChain } from "..";
import { ResolverContext } from "../../../context/types";
import { PokemonDataSources } from "../../../data-sources";
import { PokeAPI } from "../../../data-sources/poke-api";
import { fakePokemonSpecies2 } from "../../../fixtures/data-sources/pokemon-species";

const baseParent: MetaEvolutionChain = {
  _meta: {
    pokemonId: "8",
  },
};

const basePokeAPI = {
  getPokemonSpeciesById: jest.fn().mockResolvedValue(fakePokemonSpecies2),
} as unknown as PokeAPI;

const baseDataSources: PokemonDataSources = {
  pokeAPI: basePokeAPI,
};

const baseContext = {
  dataSources: baseDataSources,
} as ResolverContext;

describe("EvolutionChain.from", () => {
  it("should return evolution from with _meta", async () => {
    const expectedResult = {
      _meta: {
        evolutionFromSpecies: fakePokemonSpecies2.evolves_from_species,
      },
    };
    const result = await getFrom(baseParent, null, baseContext);
    expect(result).toEqual(expectedResult);
  });

  it("should return null if _meta.pokemonId is undefined", async () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent?._meta,
        pokemonId: undefined,
      },
    };
    const result = await getFrom(updatedParent, null, baseContext);
    expect(result).toBeNull();
  });

  it("should return null if pokeAPI.getPokemonSpeciesById yields undefined evolves_from_species", async () => {
    jest.spyOn(basePokeAPI, "getPokemonSpeciesById").mockResolvedValueOnce({
      ...fakePokemonSpecies2,
      evolves_from_species: undefined,
    });
    const result = await getFrom(baseParent, null, baseContext);
    expect(result).toBeNull();
  });
});
