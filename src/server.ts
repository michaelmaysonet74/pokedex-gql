import { ApolloServer } from "apollo-server";

import depthLimit from "graphql-depth-limit";
import schema from "./schema";
import { context } from "./context";
import { dataSources } from "./data-sources";

const baseConfigs = {
  validationRules: [depthLimit(5)],
};

const server = new ApolloServer({
  schema,
  context,
  dataSources,
  ...baseConfigs,
});

(async () => {
  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
})();
