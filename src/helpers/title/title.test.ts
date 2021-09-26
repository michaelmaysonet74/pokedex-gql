import { getTitle } from ".";

describe("getTitle", () => {
  it("should return kebab-case string formatted as a title", () => {
    const expectedResult = "Water Gun";
    const result = getTitle({ str: "water-gun" });
    expect(result).toBe(expectedResult);
  });

  it("should return single string formatted as a title", () => {
    const expectedResult = "Bite";
    const result = getTitle({ str: "bite" });
    expect(result).toBe(expectedResult);
  });
});
