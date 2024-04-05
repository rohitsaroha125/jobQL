import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";

const PORT = 5000;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
