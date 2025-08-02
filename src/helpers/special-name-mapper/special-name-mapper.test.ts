import { getSpecialName } from ".";

describe("getSpecialName", () => {
  it("should return the special name for a known pokemon", () => {
    expect(getSpecialName({ name: "chien-pao" })).toBe("Chien-Pao");
    expect(getSpecialName({ name: "ho-oh" })).toBe("Ho-Oh");
    expect(getSpecialName({ name: "porygon-z" })).toBe("Porygon-Z");
  });

  it("should return null for an unknown pokemon", () => {
    expect(getSpecialName({ name: "unknown-pokemon" })).toBeNull();
  });
});
