import YAML from "yaml";
import * as fs from "fs/promises";
import * as path from "path";

export interface Information {
  basic: Basic;
  skills: Array<SkillCategory>;
  histories: Array<History>;
  contacts: Array<Contact>;
}

interface Basic {
  name: string;
  aka: string;
  birthday: string;
  school: string;
  department: string;
}

interface SkillCategory {
  name: string;
  skills: Array<Skill>;
}

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface History {
  date: string;
  title: string;
  links?: Array<Link>;
}

interface Link {
  name: string;
  url: string;
}

interface Contact {
  name: string;
  uri: string;
  icon?: string;
}

export async function readInformation(): Promise<Information> {
  const filePath = path.join(__dirname, "..", "info.yml");
  const rawFile = await fs.readFile(filePath, "utf-8");
  return YAML.parse(rawFile);
}
