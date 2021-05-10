import { extendType, objectType } from "nexus";

export const Contact = objectType({
  name: "Contact",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("uri");
    t.string("icon");
  },
});

export const contactsQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("contacts", {
      type: Contact,
      resolve(_root, _args, { info }) {
        return info.contacts;
      },
    });
  },
});
