import { getMeasurement } from ".";
import { MetaPokemon } from "..";
import { fakePokemon } from "../../../fixtures/data-sources/pokemon";
import { MetaMeasurement } from "../../measurement";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    pokemonDetails: fakePokemon,
  },
};

describe("Pokemon.measurement", () => {
  it("should return SchemaMeasurement with _meta", () => {
    const expectedResult: MetaMeasurement = {
      _meta: {
        height: fakePokemon.height,
        weight: fakePokemon.weight,
      },
    };
    const result = getMeasurement(baseParent);
    expect(result).toEqual(expectedResult);
  });
});
