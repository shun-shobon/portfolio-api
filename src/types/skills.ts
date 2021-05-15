import { extendType, objectType, stringArg, nonNull } from "nexus";

export const SkillCategory = objectType({
  name: "SkillCategory",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.list.nonNull.field("skills", { type: Skill });
  },
});

export const Skill = objectType({
  name: "Skill",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.int("level");
    t.string("icon");
  },
});

export const skillsQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("skills", {
      type: SkillCategory,
      resolve(_root, _args, { info }) {
        return info.skills;
      },
    });

    t.field("skill", {
      type: SkillCategory,
      args: {
        name: nonNull(stringArg()),
      },
      resolve(_root, args, { info }) {
        return info.skills.find(({ name }) => name === args.name) ?? null;
      },
    });
  },
});
