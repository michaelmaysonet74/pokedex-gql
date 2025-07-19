import { getHeightInFeetInches } from ".";

describe("getHeightInFeet", () => {
  it("should return height in feet and inches from decimeters", () => {
    const expectedResult = [24, 3];
    const result = getHeightInFeetInches({ heightInDecimeters: 74 });
    expect(result).toEqual(expectedResult);
  });

  it("should return [0, 0] for negative heightInDecimeters", () => {
    const expectedResult = [0, 0];
    const result = getHeightInFeetInches({ heightInDecimeters: -5 });
    expect(result).toEqual(expectedResult);
  });

  it("should return [0, 0] for zero heightInDecimeters", () => {
    const expectedResult = [0, 0];
    const result = getHeightInFeetInches({ heightInDecimeters: 0 });
    expect(result).toEqual(expectedResult);
  });

  it("should adjust inches to 0 and increment feet when inches round to 12", () => {
    const expectedResult = [2, 0];
    const result = getHeightInFeetInches({ heightInDecimeters: 6.096 });
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
