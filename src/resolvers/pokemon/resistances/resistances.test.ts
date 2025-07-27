import { getResistances } from ".";
import { MetaPokemon } from "..";
import { ResolverContext } from "../../../context/types";
import { SchemaPokemonType } from "../../../schema-types";
import helpers from "../../../helpers";
import { fakeTypeChart } from "../../../fixtures/data-sources/pokemon-type-chart";

const baseParent: MetaPokemon = {
  id: "7",
  _meta: {
    typeChart: fakeTypeChart,
  },
};

const baseContext = { helpers } as ResolverContext;

describe("Pokemon.resistances", () => {
  it("should return resistances based from _meta.typeChart.resistances ", () => {
    const result = getResistances(baseParent, null, baseContext);
    expect(result).toEqual([
      SchemaPokemonType.fire,
      SchemaPokemonType.ice,
      SchemaPokemonType.steel,
      SchemaPokemonType.water,
    ]);
  });
});
