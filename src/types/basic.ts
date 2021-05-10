import { objectType } from "nexus";

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
