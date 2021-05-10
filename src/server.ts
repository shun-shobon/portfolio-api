import { fastify, FastifyInstance } from "fastify";
import mercurius from "mercurius";
import { makeSchema } from "nexus";

import * as types from "./types";
import { buildContent } from "./context";
import type { Config } from "./config";

export async function buildServer(config: Config): Promise<FastifyInstance> {
  const server = fastify({ logger: true });

  const schema = makeSchema({ types });

  const context = await buildContent();

  server.register(mercurius, {
    graphiql: config.isProduction ? false : "playground",
    schema,
    context,
  });

  server.get("/healthz", async (request, reply) => {
    await reply.send("OK");
  });

  return server;
}
