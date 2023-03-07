import { getHeight } from ".";
import { MetaMeasurement } from "..";
import { baseResolverContext } from "../../../helpers/test";

const baseParent: MetaMeasurement = {
  _meta: {
    height: 2,
  },
};

describe("Measurement.height", () => {
  it("should return height as a string", () => {
    const expectedResult = `0' 07"`;
    const result = getHeight(baseParent, null, baseResolverContext);
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
    const result = getHeight(updatedParent, null, baseResolverContext);
    expect(result).toBeNull();
  });
});
