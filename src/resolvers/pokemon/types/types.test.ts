import { getTypes } from ".";
import { MetaPokemon } from "..";
import { PokemonType } from "../../../data-sources/poke-api/models/pokemon-type";
import { fakePokemon } from "../../../fixtures/data-sources/pokemon";
import { baseResolverContext } from "../../../helpers/test";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    pokemonDetails: fakePokemon,
  },
};

describe("Pokemon.types", () => {
  it("should return types as an array of strings", () => {
    const expectedResult = ["Water"];
    const result = getTypes(baseParent, null, baseResolverContext);
    expect(result).toEqual(expectedResult);
  });

  it("should return empty array if _meta.pokemonDetails.types is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        pokemonDetails: {
          ...fakePokemon,
          types: undefined as unknown as PokemonType[],
        },
      },
    };
    const result = getTypes(updatedParent, null, baseResolverContext);
    expect(result).toEqual([]);
  });
});
