import { getHeight } from ".";
import { MetaDimensions } from "..";

const baseParent: MetaDimensions = {
  _meta: {
    height: 2,
  },
};

describe("Dimension.height", () => {
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
