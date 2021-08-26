import { ApolloServer } from "apollo-server";
import depthLimit from "graphql-depth-limit";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { context } from "./context";
import { dataSources } from "./data-sources";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources,
  validationRules: [depthLimit(5)],
});

(async () => {
  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
})();
