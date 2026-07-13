import { Component } from "solid-js";
import { Command } from "~/components/terminal";

export const projects: Command = {
  name: "projects",
  description: "Show my featured projects",
  handler: () => {
    return (
      <div class="flex flex-col gap-3 pl-4 py-2 border-l-2 border-purple-500 my-2">
        <p class="font-bold text-purple-400">📂 FEATURED PROJECTS</p>
        
        <div class="flex flex-col gap-1">
          <p class="font-bold text-blue-300">🤖 YMMBFA</p>
          <p class="pl-2">A Python-based bot repository.</p>
          <p class="pl-2 text-sm text-gray-400">
            Tech: Python |{" "}
            <a href="https://github.com/MIPOHBOPOHIH/YMMBFA" target="_blank" class="text-blue-400 hover:underline">
              GitHub (21 ⭐)
            </a>
          </p>
        </div>

        <div class="flex flex-col gap-1">
          <p class="font-bold text-blue-300">🎵 YMMBBot</p>
          <p class="pl-2">A Telegram bot that displays the song currently playing on your media player.</p>
          <p class="pl-2 text-sm text-gray-400">
            Tech: Python |{" "}
            <a href="https://github.com/MIPOHBOPOHIH/YMMBBot" target="_blank" class="text-blue-400 hover:underline">
              GitHub (6 ⭐)
            </a>
          </p>
        </div>

        <div class="flex flex-col gap-1">
          <p class="font-bold text-blue-300">🔑 megacurrenttrack-go</p>
          <p class="pl-2">Token stealer utility written in Go (Forked from bulatorr/tokenstealer-go).</p>
          <p class="pl-2 text-sm text-gray-400">
            Tech: Go |{" "}
            <a href="https://github.com/MIPOHBOPOHIH/megacurrenttrack-go" target="_blank" class="text-blue-400 hover:underline">
              GitHub (3 ⭐)
            </a>
          </p>
        </div>

        <div class="flex flex-col gap-1">
          <p class="font-bold text-blue-300">🎮 mbgenshin</p>
          <p class="pl-2">Forked Genshin utility website featuring custom Russian translation updates.</p>
          <p class="pl-2 text-sm text-gray-400">
            Tech: HTML, CSS, JavaScript |{" "}
            <a href="https://github.com/MIPOHBOPOHIH/mbgenshin" target="_blank" class="text-blue-400 hover:underline">
              GitHub (1 ⭐)
            </a>
          </p>
        </div>
      </div>
    );
  },
};
