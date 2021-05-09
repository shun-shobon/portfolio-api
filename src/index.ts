import { fastify } from "fastify";
import mercurius from "mercurius";
import * as fs from "fs/promises";
import * as path from "path";

import type { Resolvers } from "./generated/graphql";

async function main(): Promise<void> {
  const server = fastify();

  const schema = await loadSchema();

  const resolvers: Resolvers = {
    Query: {
      ok: async () => true,
    },
  };

  server.register(mercurius, {
    graphiql: "playground",
    schema,
    resolvers,
  });

  await server.listen(3000);
  console.log("listen on http://localhost:3000");
}

function loadSchema(): Promise<string> {
  const schemaPath = path.join(__dirname, "..", "schema.graphql");

  return fs.readFile(schemaPath, "utf-8");
}

main().catch(console.error);
