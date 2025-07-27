import { Response } from "../../data-sources/pokemon-type-chart/models/response";
import { TypeChart } from "../../data-sources/pokemon-type-chart/models/type-chart";

export const fakeTypeChart: TypeChart = {
  immunities: [],
  resistances: ["Fire", "Ice", "Steel", "Water"],
  weaknesses: ["Electric", "Grass"],
};

export const fakePokemonTypeChartResponse: Response = {
  pokemon: {
    name: "Squirtle",
    types: ["Water"],
  },
  type_chart: fakeTypeChart,
};
