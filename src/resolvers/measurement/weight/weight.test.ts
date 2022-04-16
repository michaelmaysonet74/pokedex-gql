import { getWeight } from ".";
import { MetaMeasurement } from "..";
import { baseResolverContext } from "../../../helpers/test";

const baseParent: MetaMeasurement = {
  _meta: {
    weight: 90,
  },
};

describe("Measurement.weight", () => {
  it("should return weight as a string", () => {
    const expectedResult = "19.8 lbs.";
    const result = getWeight(baseParent, null, baseResolverContext);
    expect(result).toBe(expectedResult);
  });

  it("should return null if _meta.weight is undefined", () => {
    const updatedParent = {
      ...baseParent,
      _meta: {
        ...baseParent._meta,
        weight: undefined,
      },
    };
    const result = getWeight(updatedParent, null, baseResolverContext);
    expect(result).toBeNull();
  });
});
