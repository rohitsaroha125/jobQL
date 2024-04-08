import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import { readFile } from "node:fs/promises";
import { resolvers } from "./resolvers.js";
import { handleLogin, loginMiddleware } from "./controllers/loginController.js";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(loginMiddleware);

app.post("/login", handleLogin);

const typeDefs = await readFile("./schema.graphql", "utf-8");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

function getContext({ req }) {
  return { userId: req.userId };
}

await apolloServer.start();
app.use("/graphql", apolloMiddleware(apolloServer, { context: getContext }));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`Graphql Endpoint is http://localhost:${PORT}/graphql`);
});
