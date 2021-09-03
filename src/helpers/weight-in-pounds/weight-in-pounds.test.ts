import { getWeightInPounds } from ".";

describe("getWeightInPounds", () => {
  it("should return weight in pounds from hectrograms", () => {
    const expectedResult = 19.8;
    const result = getWeightInPounds({ weightInHectograms: 90 });
    expect(result).toBe(expectedResult);
  });

  it("should execute gracefully if weightInHectograms is undefined", () => {
    const expectedResult = 0;
    const result = getWeightInPounds({
      weightInHectograms: undefined as unknown as number,
    });
    expect(result).toBe(expectedResult);
  });
});
