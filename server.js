import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import { readFile } from "node:fs/promises";
import { resolvers } from "./resolvers.js";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

const typeDefs = await readFile("./schema.graphql", "utf-8");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

await apolloServer.start();
app.use("/graphql", apolloMiddleware(apolloServer));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`Graphql Endpoint is http://localhost:${PORT}/graphql`);
});
