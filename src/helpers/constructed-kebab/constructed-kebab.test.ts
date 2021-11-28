import { getConstructedKebab } from ".";

describe("getConstructedKebab", () => {
  it("should return lower case kebab string from space seperated string", () => {
    const expectResult = "mr-mime";
    const result = getConstructedKebab({ str: "Mr Mime" });
    expect(result).toBe(expectResult);
  });
});
