import { getName } from ".";
import { MetaEvolutionFrom } from "..";
import { fakeEvolvesFromSpecies } from "../../../fixtures/data-sources/pokemon-species";
import { baseResolverContext } from "../../../helpers/test";

const baseParent: MetaEvolutionFrom = {
  _meta: {
    evolutionFromSpecies: fakeEvolvesFromSpecies,
  },
};

describe("EvolutionFrom.name", () => {
  it("should return name as a string", () => {
    const expectedResult = "Squirtle";
    const result = getName(baseParent, null, baseResolverContext);
    expect(result).toBe(expectedResult);
  });

  it("should return null if _meta.evolutionFromSpecies is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent?._meta,
        evolutionFromSpecies: undefined,
      },
    };
    const result = getName(updatedParent, null, baseResolverContext);
    expect(result).toBeNull();
  });

  it("should return null if _meta.evolutionFromSpecies.name is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent?._meta,
        evolutionFromSpecies: {
          ...baseParent?._meta?.evolutionFromSpecies,
          name: undefined,
        },
      },
    };
    const result = getName(updatedParent, null, baseResolverContext);
    expect(result).toBeNull();
  });
});
