import { objectType } from "nexus";

export const Contact = objectType({
  name: "Contact",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("uri");
    t.string("icon");
  },
});
