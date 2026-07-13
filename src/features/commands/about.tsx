import { Component } from "solid-js";
import { Command } from "~/components/terminal";

export const about: Command = {
  name: "about",
  description: "Show information about me",
  handler: () => {
    return (
      <div class="flex flex-col gap-2 pl-4 py-2 border-l-2 border-blue-500 my-2 font-mono">
        <p class="font-bold text-blue-400">💡 ABOUT ME</p>
        <p>
          Hi, I am <span class="text-purple-400 font-bold">MIPOHBOPOHIH</span> (Miron).
        </p>
        <pre class="bg-gray-950 p-4 rounded text-sm text-green-400 border border-gray-800 my-2 overflow-x-auto">
{`def about_me():
    return {
        "profile": {
            "name": "Miron",
            "age": 16,
            "nickname": "MIPOHBOPOHIH",
        },
        "contact_info": {
            "email": "mipoh@mipoh.gay",
            "telegram": "@mipohbopohih",
        },
    }`}
        </pre>
        <p class="text-gray-400 text-sm">
          Type <span class="text-yellow-400 font-bold">projects</span> or{" "}
          <span class="text-yellow-400 font-bold">links</span> to learn more about my work.
        </p>
      </div>
    );
  },
};
