import { Terminal } from "~/components/terminal";
import { commands } from "~/features/commands";

const asciiBanner = [
  "            _             _     _                       _     _ _     ",
  "  _ __ ___ (_)_ __   ___ | |__ | |__   ___  _ __   ___ | |__ (_) |__  ",
  " | '_ \\` _ \\| | '_ \\ / _ \\| '_ \\| '_ \\ / _ \\| '_ \\ / _ \\| '_ \\| | '_ \\ ",
  " | | | | | | | |_) | (_) | | | | |_) | (_) | |_) | (_) | | | | | | | |",
  " |_| |_| |_|_| .__/ \\___/|_| |_|_.__/ \\___/| .__/ \\___/|_| |_|_|_| |_|",
  "             |_|                           |_|                        ",
  "",
  "❄️ Welcome to mipohbopohih!",
].join("\n");

const paddingSize =
  Math.max(...commands.map((command) => command.name.length)) + 2;

const docs = `COMMANDS:
${commands.map((command) => `  ${command.name.padEnd(paddingSize)}  ${command.description}`).join("\n")}

Type 'help' to see all available commands.
`;

export default function Home() {
  return (
    <div class="p-8">
      <pre class="w-full max-w-full block font-bold text-xs sm:text-sm md:text-base lg:text-xl overflow-x-auto whitespace-pre">{asciiBanner}</pre>
      <pre class="w-full max-w-full block text-sm sm:text-base md:text-xl overflow-x-auto whitespace-pre">{docs}</pre>
      <Terminal commands={commands} />
    </div>
  );
}
