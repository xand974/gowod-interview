import * as dotenv from "dotenv";
dotenv.config();
import "./config/db";
import { Application } from "express";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRouter from "./routers/Auth";
import moviesRouter from "./routers/Movies";
import listsRouter from "./routers/Lists";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema/type-defs";
import { resolvers } from "./schema/mutations";

const app: Application = express();
const port = 3000 || process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.use(cors());
  app.use(
    helmet({
      contentSecurityPolicy:
        process.env.NODE_ENV === "production" ? undefined : false,
    })
  );
  app.use(morgan("common"));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/movies", moviesRouter);
  app.use("/api/v1/lists", listsRouter);

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

startServer().catch((err) => console.error);
