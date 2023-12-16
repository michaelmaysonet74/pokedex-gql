import { sanitizeString } from ".";

describe("sanitizeString", () => {
  it("should remove \n and \f from string and trim", () => {
    expect(sanitizeString({ str: "\fTest\n" })).toEqual("Test");
  });
});
