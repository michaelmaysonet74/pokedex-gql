import { getEvolution } from ".";
import { MetaPokemon } from "..";

const baseParent: MetaPokemon = {
  id: "7",
};

describe("Pokemon.evolution", () => {
  it("should return evolution chain with _meta", () => {
    const expectedResult = {
      _meta: {
        pokemonId: "7",
      },
    };
    const result = getEvolution(baseParent);
    expect(result).toEqual(expectedResult);
  });
});
