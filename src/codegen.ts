import { makeSchema } from "nexus";
import * as path from "path";

import * as types from "./types";

makeSchema({
  types,
  outputs: {
    typegen: path.resolve("node_modules", "@types", "nexus", "index.d.ts"),
    schema: path.join(__dirname, "..", "schema.graphql"),
  },
  contextType: {
    module: require.resolve("./context.ts"),
    export: "Context",
  },
});
