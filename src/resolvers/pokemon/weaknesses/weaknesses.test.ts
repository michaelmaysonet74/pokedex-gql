import { getWeaknesses } from ".";
import { MetaPokemon } from "..";
import { Pokemon } from "../../../data-sources/poke-api/models/pokemon";
import { ResolverContext } from "../../../context/types";
import { PokemonDataSources } from "../../../data-sources";
import { PokeAPI } from "../../../data-sources/poke-api";
import { SchemaPokemonType } from "../../../schema-types";
import helpers from "../../../helpers";
import { fakePokemon } from "../../../fixtures/data-sources/pokemon";
import { fakePokemonTypeDetails } from "../../../fixtures/data-sources/pokemon-type-details";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    pokemonDetails: fakePokemon,
  },
};

const basePokeAPI = {
  getPokemonTypeDetailsById: jest
    .fn()
    .mockResolvedValue(fakePokemonTypeDetails),
} as unknown as PokeAPI;

const baseDataSources: PokemonDataSources = {
  pokeAPI: basePokeAPI,
};

const baseContext = {
  dataSources: baseDataSources,
  helpers,
} as ResolverContext;

describe("Pokemon.weaknesses", () => {
  it("should return weaknesses based from the _meta.pokemonDetails.types", async () => {
    const result = await getWeaknesses(baseParent, null, baseContext);
    expect(result).toEqual([
      SchemaPokemonType.grass,
      SchemaPokemonType.electric,
    ]);
  });

  it("should return empty list of weaknesses if _meta.pokemonDetails.types is empty", async () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        pokemonDetails: {
          ...baseParent._meta?.pokemonDetails,
          types: [],
        } as unknown as Pokemon,
      },
    };
    const result = await getWeaknesses(updatedParent, null, baseContext);
    expect(result).toEqual([]);
  });
});
