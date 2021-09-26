import { getDeconstructedKebab } from ".";

describe("getDeconstructedKebab", () => {
  it("should return array of strings from kebab-case string", () => {
    const expectedResult = ["water", "gun"];
    const result = getDeconstructedKebab({ kebab: "water-gun" });
    expect(result).toEqual(expectedResult);
  });

  it("should return single string array from single string", () => {
    const expectedResult = ["bite"];
    const result = getDeconstructedKebab({ kebab: "bite" });
    expect(result).toEqual(expectedResult);
  });
});
