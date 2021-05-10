export type Config = {
  isProduction: boolean;
  listenPort: string;
  listenAddr: string;
};

export function loadConfig(): Config {
  const isProduction = process.env["NODE_ENV"] === "production";

  return {
    isProduction,
    listenPort: readEnv("LISTEN_PORT"),
    listenAddr: readEnv("LISTEN_ADDR"),
  };
}

function readEnv(name: string): string {
  const env = process.env[name];

  if (env === undefined) {
    throw new Error(`${name} is not declared.`);
  }

  return env;
}
