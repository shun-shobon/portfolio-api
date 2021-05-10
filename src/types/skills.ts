import { objectType } from "nexus";

export const SkillCategory = objectType({
  name: "SkillCategory",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.list.nonNull.field("icon", { type: Skill });
  },
});

export const Skill = objectType({
  name: "Skill",
  definition(t) {
    t.nonNull.string("name");
    t.string("icon");
  },
});
