import { Command } from "~/components/terminal";
import { about } from "./about";
import { links } from "./links";
import { projects } from "./projects";
import { neofetch } from "./neofetch";
import { help } from "./help";

export const commands: Command[] = [
  about,
  projects,
  links,
  neofetch,
  help,
];

