import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";

import { typeDefs } from "./schema/type-defs";
import { resolvers } from "./schema/mutations";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app: Application = express();
const port = 3000 || process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

export const createServer = async () => {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.use(express.json());
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

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));

  return app;
};
