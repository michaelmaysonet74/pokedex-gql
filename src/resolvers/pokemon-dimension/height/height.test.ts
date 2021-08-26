import { getHeight } from ".";
import { MetaPokemonDimensions } from "..";

const baseParent: MetaPokemonDimensions = {
  _meta: {
    height: 2,
  },
};

describe("PokemonDimension.height", () => {
  it("should return height as a string", () => {
    const expectedResult = baseParent?._meta?.height?.toString();
    const result = getHeight(baseParent);
    expect(result).toBe(expectedResult);
  });

  it("should return null if _meta.height is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        height: undefined,
      },
    };
    const result = getHeight(updatedParent);
    expect(result).toBeNull();
  });
});
