import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

type Query{
    greetings: String
}
`;

const resolvers = {
  Query: {
    greetings: () => "Hello World",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 5000 } });
console.log(`🚀 Server ready at ${url}`);
