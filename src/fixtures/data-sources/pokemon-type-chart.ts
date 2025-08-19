import { Response } from "../../data-sources/pokemon-type-chart/models/response";
import { Effectiveness } from "../../data-sources/pokemon-type-chart/models/effectiveness";

export const fakeEffectiveness: Effectiveness = {
  immunities: [],
  resistances: ["Fire", "Ice", "Steel", "Water"],
  weaknesses: ["Electric", "Grass"],
};

export const fakePokemonTypeChartResponse: Response = {
  pokemon: {
    name: "Squirtle",
    types: ["Water"],
  },
  effectiveness: fakeEffectiveness,
};
