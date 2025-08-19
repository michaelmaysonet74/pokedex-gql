import { Pokemon } from "./pokemon";
import { Effectiveness } from "./effectiveness";

export interface Response {
  pokemon: Pokemon;
  effectiveness: Effectiveness;
}
