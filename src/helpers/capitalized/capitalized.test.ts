import { getCapitalized } from ".";

describe("getCapitalized", () => {
  it("should capitalize the first letter of a string", () => {
    const expectedResult = "Bulbasaur";
    const result = getCapitalized({ str: "bulbasaur" });
    expect(result).toBe(expectedResult);
  });

  it("should execute gracefully when str is undefined", () => {
    const expectedResult = "";
    const result = getCapitalized({
      str: undefined as unknown as string,
    });
    expect(result).toBe(expectedResult);
  });

  it("should return capitalized string of all upper cased string", () => {
    const expectedResult = "Pikachu";
    const result = getCapitalized({ str: "PIKACHU" });
    expect(result).toBe(expectedResult);
  });
});
