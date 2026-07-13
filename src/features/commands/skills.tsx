import { Component } from "solid-js";
import { Command } from "~/components/terminal";

export const skills: Command = {
  name: "skills",
  description: "Show my tech stack and skills",
  handler: () => {
    return (
      <div class="flex flex-col gap-2 pl-4 py-2 border-l-2 border-green-500 my-2">
        <p class="font-bold text-green-400">⚡ TECH STACK & SKILLS</p>
        <div class="flex flex-col gap-1">
          <div>
            <span class="text-blue-300 font-bold">Languages:</span> Python, Go, HTML, JavaScript
          </div>
          <div>
            <span class="text-blue-300 font-bold">Frontend:</span> Next.js, React, SolidJS, Tailwind CSS
          </div>
          <div>
            <span class="text-blue-300 font-bold">Automation:</span> Telegram Bot development (aiogram, python-telegram-bot)
          </div>
          <div>
            <span class="text-blue-300 font-bold">Developer Tools:</span> Git, GitHub, Docker, Linux, VS Code
          </div>
        </div>
      </div>
    );
  },
};
