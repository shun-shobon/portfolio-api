import { buildServer } from "./server";
import { loadConfig } from "./config";

async function main(): Promise<void> {
  const config = loadConfig();

  const server = await buildServer(config);

  await server.listen(config.listenPort, config.listenAddr);
}

main().catch(console.error);
