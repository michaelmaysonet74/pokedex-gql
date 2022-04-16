import EvolutionFrom from "./evolution-from";
import EvolutionChain from "./evolution-chain";
import Measurement from "./measurement";
import Pokemon from "./pokemon";
import Query from "./query";

export const typeDefs = [
  EvolutionFrom.schema,
  EvolutionChain.schema,
  Measurement.schema,
  Pokemon.schema,
  Query.schema,
];

export const resolvers = {
  EvolutionFrom: EvolutionFrom.resolver,
  EvolutionChain: EvolutionChain.resolver,
  Measurement: Measurement.resolver,
  Pokemon: Pokemon.resolver,
  Query: Query.resolver,
};
