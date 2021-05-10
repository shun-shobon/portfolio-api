import { buildServer } from "./server";

async function main(): Promise<void> {
  const server = await buildServer();

  await server.listen(3000);
  console.log("listen on http://localhost:3000");
}

main().catch(console.error);
