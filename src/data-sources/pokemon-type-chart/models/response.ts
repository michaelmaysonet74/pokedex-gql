import { Pokemon } from "./pokemon";
import { TypeChart } from "./type-chart";

export interface Response {
  pokemon: Pokemon;
  type_chart: TypeChart;
}
