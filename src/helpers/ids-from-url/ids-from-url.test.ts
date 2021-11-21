import { getIdsFromUrl } from ".";

describe("getIdsFromUrl", () => {
  it("should return list of ids found in url", () => {
    const url = "http://www.test.com/1/2/3";
    const exectedResult = ["1", "2", "3"];
    const result = getIdsFromUrl({ url });
    expect(result).toEqual(exectedResult);
  });

  it("should return empty list if no ids were found in url", () => {
    const url = "http://www.test.com/";
    const exectedResult: string[] = [];
    const result = getIdsFromUrl({ url });
    expect(result).toEqual(exectedResult);
  });
});
