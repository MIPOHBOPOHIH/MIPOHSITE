import { Component } from "solid-js";
import { Command } from "~/components/terminal";

const asciiLogo = `   /\\_/\\
  ( o.o )
   > ^ <
  /     \\
 (       )
  \`-^-^-'`;

export const neofetch: Command = {
  name: "neofetch",
  description: "Show system info summary",
  handler: () => {
    const uptimeSec = Math.floor(performance.now() / 1000);
    const uptimeStr =
      uptimeSec > 60
        ? `${Math.floor(uptimeSec / 60)}m ${uptimeSec % 60}s`
        : `${uptimeSec}s`;

    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "N/A";
    const os = userAgent.includes("Windows")
      ? "Windows"
      : userAgent.includes("Mac")
        ? "macOS"
        : userAgent.includes("Linux")
          ? "Linux"
          : "Web Host";
    const browser = userAgent.includes("Chrome")
      ? "Chrome"
      : userAgent.includes("Firefox")
        ? "Firefox"
        : userAgent.includes("Safari")
          ? "Safari"
          : "Web Browser";

    return (
      <div class="flex gap-6 pl-4 py-2 my-2 select-none">
        <pre class="text-yellow-400 font-bold hidden sm:block">{asciiLogo}</pre>
        <div class="flex flex-col gap-1">
          <p class="font-bold text-blue-400 text-lg">guest@mipoh.gay</p>
          <p class="text-gray-400">-----------------------</p>
          <p>
            <span class="text-green-400 font-bold">OS:</span> {os}
          </p>
          <p>
            <span class="text-green-400 font-bold">Browser:</span> {browser}
          </p>
          <p>
            <span class="text-green-400 font-bold">Shell:</span> SolidStart Terminal v1.1
          </p>
          <p>
            <span class="text-green-400 font-bold">Uptime:</span> {uptimeStr}
          </p>
          <p>
            <span class="text-green-400 font-bold">Theme:</span> Retro Dark
          </p>
          <p>
            <span class="text-green-400 font-bold">Stack:</span> SolidJS, TS, Tailwind CSS v4, Vinxi
          </p>
        </div>
      </div>
    );
  },
};
