import { getWeaknesses } from ".";
import { MetaPokemon } from "..";
import { Pokemon } from "../../../data-sources/poke-api/models/pokemon";
import { ResolverContext } from "../../../context/types";
import { PokemonDataSources } from "../../../data-sources";
import { SchemaPokemonType } from "../../../schema-types";
import helpers from "../../../helpers";
import { fakePokemon } from "../../../fixtures/data-sources/pokemon";
import { fakePokemonTypeChartResponse } from "../../../fixtures/data-sources/pokemon-type-chart";
import { PokemonTypeChart } from "../../../data-sources/pokemon-type-chart";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    pokemonDetails: fakePokemon,
  },
};

const basePokemonTypeChart = {
  getPokemonTypeChart: jest
    .fn()
    .mockResolvedValue(fakePokemonTypeChartResponse),
} as unknown as PokemonTypeChart;

const baseDataSources: Partial<PokemonDataSources> = {
  pokemonTypeChart: basePokemonTypeChart,
};

const baseContext = {
  dataSources: baseDataSources,
  helpers,
} as ResolverContext;

describe("Pokemon.weaknesses", () => {
  it("should return weaknesses based from the _meta.pokemonDetails.types", async () => {
    const result = await getWeaknesses(baseParent, null, baseContext);
    expect(result).toEqual([
      SchemaPokemonType.electric,
      SchemaPokemonType.grass,
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
