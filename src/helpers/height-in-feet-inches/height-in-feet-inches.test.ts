import { getHeightInFeetInches } from ".";

describe("getHeightInFeet", () => {
  it("should return height in feet and inches from decimeters", () => {
    const expectedResult = [24, 3];
    const result = getHeightInFeetInches({ heightInDecimeters: 74 });
    expect(result).toEqual(expectedResult);
  });

  it("should execute gracefully when heightInDecimeters is undefined", () => {
    const expectedResult = [0, 0];
    const result = getHeightInFeetInches({
      heightInDecimeters: undefined as unknown as number,
    });
    expect(result).toEqual(expectedResult);
  });
});
