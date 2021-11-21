import { getId } from ".";
import { MetaEvolutionFrom } from "..";
import { fakeEvolvesFromSpecies } from "../../../fixtures/data-sources/pokemon-species";

const baseParent: MetaEvolutionFrom = {
  _meta: {
    evolutionFromSpecies: fakeEvolvesFromSpecies,
  },
};

describe("EvolutionFrom.id", () => {
  it("should return id as a string", () => {
    const expectedResult = "7";
    const result = getId(baseParent);
    expect(result).toBe(expectedResult);
  });

  it("should return null if _meta.evolutionFromSpecies is undefines", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent?._meta,
        evolutionFromSpecies: undefined,
      },
    };
    const result = getId(updatedParent);
    expect(result).toBeNull();
  });

  it("should return null if _meta.evolutionFromSpecies.url is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent?._meta,
        evolutionFromSpecies: {
          ...baseParent?._meta?.evolutionFromSpecies,
          url: undefined,
        },
      },
    };
    const result = getId(updatedParent);
    expect(result).toBeNull();
  });
});
