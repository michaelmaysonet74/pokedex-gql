import { gql } from "apollo-server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";
import { resolve } from "path";
import { resolvers } from "../resolvers";

const typeDefs = gql(
  readFileSync(resolve(__dirname, "schema.graphql"), {
    encoding: "utf8",
  })
);

export default makeExecutableSchema({ typeDefs, resolvers });
