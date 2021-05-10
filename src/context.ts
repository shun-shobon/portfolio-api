import { FastifyRequest, FastifyReply } from "fastify";
import { Information, readInformation } from "./yaml";

export type Context = {
  request: FastifyRequest;
  reply: FastifyReply;
  info: Information;
};

type HandleContext = (
  request: FastifyRequest,
  reply: FastifyReply,
) => Promise<Context>;

export async function buildContent(): Promise<HandleContext> {
  const info = await readInformation();
  return async (request, reply) => ({ request, reply, info });
}
