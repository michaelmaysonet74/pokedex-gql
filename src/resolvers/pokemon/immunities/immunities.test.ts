import { getImmunities } from ".";
import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import helpers from "../../../helpers";
import { fakeEffectiveness } from "../../../fixtures/data-sources/pokemon-type-chart";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    effectiveness: fakeEffectiveness,
  },
};

const baseContext = { helpers } as ResolverContext;

describe("Pokemon.immunities", () => {
  it("should return immunities based from _meta.typeChart.immunities ", () => {
    const result = getImmunities(baseParent, null, baseContext);
    expect(result).toEqual([]);
  });
});
