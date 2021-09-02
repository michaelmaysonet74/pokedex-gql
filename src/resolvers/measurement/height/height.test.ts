import { getHeight } from ".";
import { MetaMeasurement } from "..";

const baseParent: MetaMeasurement = {
  _meta: {
    height: 2,
  },
};

describe("Measurement.height", () => {
  it("should return height as a string", () => {
    const expectedResult = `2"`;
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
