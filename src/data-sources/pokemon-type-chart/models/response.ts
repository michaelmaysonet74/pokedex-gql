import { Pokemon } from "./pokemon";

export interface Response {
  pokemon: Pokemon;
  type_chart: {
    immunities: string[];
    resistances: string[];
    weaknesses: string[];
  };
}
