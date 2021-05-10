import { objectType } from "nexus";

export const History = objectType({
  name: "History",
  definition(t) {
    t.nonNull.string("date");
    t.nonNull.string("title");
    t.list.nonNull.field("links", { type: Link });
  },
});

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("url");
  },
});
