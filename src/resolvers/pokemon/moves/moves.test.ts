import { getMoves } from ".";
import { MetaPokemon } from "..";
import { PokemonMove } from "../../../data-sources/poke-api/models/pokemon";
import { fakePokemon } from "../../../fixtures/data-sources/pokemon";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    pokemonDetails: fakePokemon,
  },
};

describe("Pokemon.moves", () => {
  it("should return moves a list of strings", () => {
    const expectedResult: string[] = ["Tackle", "Bite", "Water Gun", "Bubble"];
    const result = getMoves(baseParent);
    expect(result).toEqual(expectedResult);
  });

  it("should return empty array if _meta.pokemonDetails is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent?._meta,
        pokemonDetails: undefined,
      },
    };
    const result = getMoves(updatedParent);
    expect(result).toEqual([]);
  });

  it("should return empty array if _meta.pokemonDetails.moves is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent?._meta,
        pokemonDetails: {
          ...fakePokemon,
          moves: undefined as unknown as PokemonMove[],
        },
      },
    };
    const result = getMoves(updatedParent);
    expect(result).toEqual([]);
  });
});
