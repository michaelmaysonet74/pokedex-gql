import { getAbilities } from ".";
import { MetaPokemon } from "..";
import { PokemonAbility } from "../../../data-sources/poke-api/models/pokemon";
import { fakePokemon } from "../../../fixtures/data-sources/pokemon";
import { baseResolverContext } from "../../../helpers/test";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    pokemonDetails: fakePokemon,
  },
};

describe("Pokemon.abilities", () => {
  it("should return abilities as an array of strings", () => {
    const expectedResult = ["Torrent"];
    const result = getAbilities(baseParent, null, baseResolverContext);
    expect(result).toEqual(expectedResult);
  });

  it("should return empty array if _meta.pokemonDetails.abilities is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        pokemonDetails: {
          ...fakePokemon,
          abilities: undefined as unknown as PokemonAbility[],
        },
      },
    };
    const result = getAbilities(updatedParent, null, baseResolverContext);
    expect(result).toEqual([]);
  });
});
