import { MetaPokemon } from "..";
import { getGeneration } from "./";

describe("Pokemon.generation", () => {
  const testCases = [
    { id: "1", expected: 1 },
    { id: "151", expected: 1 },
    { id: "152", expected: 2 },
    { id: "251", expected: 2 },
    { id: "252", expected: 3 },
    { id: "386", expected: 3 },
    { id: "387", expected: 4 },
    { id: "493", expected: 4 },
    { id: "494", expected: 5 },
    { id: "649", expected: 5 },
    { id: "650", expected: 6 },
    { id: "721", expected: 6 },
    { id: "722", expected: 7 },
    { id: "809", expected: 7 },
    { id: "810", expected: 8 },
    { id: "905", expected: 8 },
    { id: "906", expected: 9 },
    { id: "1025", expected: 9 },
    { id: "1026", expected: null },
    { id: "0", expected: null },
    { id: "-1", expected: null },
    { id: "abc", expected: null },
  ];

  testCases.forEach(({ id, expected }) => {
    it(`should return the correct generation for a given Pokemon ID: ${id}`, () => {
      const result = getGeneration({ id } as MetaPokemon);
      expect(result).toBe(expected);
    });
  });
});
