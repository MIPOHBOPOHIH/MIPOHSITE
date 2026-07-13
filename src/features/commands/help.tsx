import { Command } from "~/components/terminal";

export const help: Command = {
  name: "help",
  description: "Show this help menu",
  handler: () => {
    return (
      <div class="flex flex-col gap-1 pl-4 py-2 border-l-2 border-yellow-500 my-2">
        <p class="font-bold text-yellow-400">📋 AVAILABLE COMMANDS</p>
        <div class="flex flex-col gap-1">
          <div>
            <span class="text-blue-300 font-bold w-24 inline-block">about</span>-
            Show profile summary
          </div>
          <div>
            <span class="text-blue-300 font-bold w-24 inline-block">projects</span>-
            Show featured projects
          </div>
          <div>
            <span class="text-blue-300 font-bold w-24 inline-block">links</span>-
            List social media links
          </div>
          <div>
            <span class="text-blue-300 font-bold w-24 inline-block">neofetch</span>-
            Show system and profile info
          </div>
          <div>
            <span class="text-blue-300 font-bold w-24 inline-block">clear</span>-
            Clear the console screen
          </div>
          <div>
            <span class="text-blue-300 font-bold w-24 inline-block">help</span>-
            Display this list of commands
          </div>
        </div>
      </div>
    );
  },
};
