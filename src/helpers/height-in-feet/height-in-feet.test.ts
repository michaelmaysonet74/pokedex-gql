import { getHeightInFeet } from ".";

describe("getHeightInFeet", () => {
  it("should return height in feet from decimeters", () => {
    const expectedResult = 24.3;
    const result = getHeightInFeet({ heightInDecimeters: 74 });
    expect(result).toBe(expectedResult);
  });

  it("should execute gracefully when heightInDecimeters is undefined", () => {
    const expectedResult = 0;
    const result = getHeightInFeet({
      heightInDecimeters: undefined as unknown as number,
    });
    expect(result).toBe(expectedResult);
  });
});
