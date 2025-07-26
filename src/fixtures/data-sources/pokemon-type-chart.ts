import { Response } from "../../data-sources/pokemon-type-chart/models/response";

export const fakePokemonTypeChartResponse: Response = {
  pokemon: {
    name: "Squirtle",
    types: ["Water"],
  },
  type_chart: {
    immunities: [],
    resistances: ["Fire", "Ice", "Steel", "Water"],
    weaknesses: ["Electric", "Grass"],
  },
};
