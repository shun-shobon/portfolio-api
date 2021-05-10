import { fastify } from "fastify";
import mercurius from "mercurius";
import { makeSchema } from "nexus";

import * as types from "./types";
import { createContent } from "./context";

async function main(): Promise<void> {
  const server = fastify();

  const schema = makeSchema({ types });

  server.register(mercurius, {
    graphiql: "playground",
    context: await createContent(),
    schema,
  });

  server.get("/healthz", async (request, reply) => {
    await reply.send("OK");
  });

  await server.listen(3000);
  console.log("listen on http://localhost:3000");
}

main().catch(console.error);
