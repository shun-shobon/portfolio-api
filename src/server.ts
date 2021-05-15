import { fastify, FastifyInstance } from "fastify";
import fastifyCors from "fastify-cors";
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

  server.register(fastifyCors, {
    origin: ["https://shun.technology", "localhost:3000"],
    methods: ["POST"],
  });

  server.get("/healthcheck", async (request, reply) => {
    await reply.send("OK");
  });

  return server;
}
