import { getFormattedHeight } from ".";

describe("getFormattedHeight", () => {
  it("should return formatted height as a string", () => {
    const expectedResult = `20' 00"`;
    const result = getFormattedHeight({ heightInFeetInches: [20, 0] });
    expect(result).toBe(expectedResult);
  });

  it("should execute gracefully when heightInFeet is undefined", () => {
    const expectedResult = `0' 00"`;
    const result = getFormattedHeight({
      heightInFeetInches: undefined as unknown as [number, number],
    });
    expect(result).toBe(expectedResult);
  });
});
