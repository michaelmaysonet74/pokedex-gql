import { ApolloServer } from "apollo-server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import depthLimit from "graphql-depth-limit";
import { context } from "./context";
import { dataSources } from "./data-sources";
import { typeDefs, resolvers } from "./resolvers";

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  context,
  dataSources,
  validationRules: [depthLimit(5)],
});

(async () => {
  const { NODE_ENV } = process.env;

  const { url } = await server.listen();

  if (NODE_ENV === "development") {
    console.log(`🚀  Server ready at ${url}`);
  }
})();
