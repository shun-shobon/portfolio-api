import { fastify, FastifyInstance } from "fastify";
import mercurius from "mercurius";
import { makeSchema } from "nexus";

import * as types from "./types";
import { buildContent } from "./context";

export async function buildServer(): Promise<FastifyInstance> {
  const server = fastify();

  const schema = makeSchema({ types });

  const context = await buildContent();

  server.register(mercurius, {
    graphiql: "playground",
    schema,
    context,
  });

  server.get("/healthz", async (request, reply) => {
    await reply.send("OK");
  });

  return server;
}
