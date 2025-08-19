import { getWeaknesses } from ".";
import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaPokemonType } from "../../../schema-types";
import helpers from "../../../helpers";
import { fakeEffectiveness } from "../../../fixtures/data-sources/pokemon-type-chart";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    effectiveness: fakeEffectiveness,
  },
};

const baseContext = { helpers } as ResolverContext;

describe("Pokemon.weaknesses", () => {
  it("should return weaknesses based from _meta.typeChart.weaknesses ", () => {
    const result = getWeaknesses(baseParent, null, baseContext);
    expect(result).toEqual([
      SchemaPokemonType.electric,
      SchemaPokemonType.grass,
    ]);
  });
});
