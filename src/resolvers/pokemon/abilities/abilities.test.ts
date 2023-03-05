import { getAbilities } from ".";
import { MetaPokemon } from "..";
import { PokemonAbility } from "../../../data-sources/poke-api/models/pokemon-ability";
import { fakePokemon } from "../../../fixtures/data-sources/pokemon";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    pokemonDetails: fakePokemon,
  },
};

describe("Pokemon.abilities", () => {
  it("should return abilities as an array of strings", () => {
    const expectedResult = [
      {
        _meta: {
          ability: {
            ...fakePokemon.abilities[0].ability,
          },
          isHidden: false,
        },
      },
    ];
    const result = getAbilities(baseParent);
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
    const result = getAbilities(updatedParent);
    expect(result).toEqual([]);
  });
});
