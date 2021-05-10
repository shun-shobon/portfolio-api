import { objectType, extendType } from "nexus";

export const Basic = objectType({
  name: "Basic",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("aka");
    t.nonNull.string("birthday");
    t.nonNull.string("school");
    t.nonNull.string("department");
  },
});

export const basicQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("basic", {
      type: Basic,
      resolve(_root, _args, { info }) {
        return info.basic;
      },
    });
  },
});
