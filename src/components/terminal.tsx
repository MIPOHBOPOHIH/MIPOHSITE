import {
  Component,
  createEffect,
  createSignal,
  For,
  JSX,
  onCleanup,
} from "solid-js";

export interface CommandComponentProps {
  prompt: string;
}

export type CommandHandler = Component<CommandComponentProps>;

export interface Command {
  name: string;
  description: string;
  handler: CommandHandler;
}

interface CommandLog {
  prompt: string;
  command: Command;
}

const notFoundCommand: Command = {
  name: "NOT_FOUND",
  description: "",
  handler: (props) => `${props.prompt}: command not found`,
};

export interface TerminalProps {
  commands?: Command[];
}

export const Terminal: Component<TerminalProps> = (props) => {
  const [logs, setLogs] = createSignal<CommandLog[]>([]);
  let logsContainerRef: HTMLDivElement | undefined;
  let inputRef: HTMLInputElement | undefined;

  createEffect(() => {
    const abortController = new AbortController();

    // Auto-focus input on any click
    document.addEventListener("click", () => inputRef?.focus(), {
      signal: abortController.signal,
    });

    // Simulate Tmux select-to-copy behavior
    document.addEventListener(
      "mouseup",
      () => {
        const selectedText = window.getSelection()?.toString();
        if (!selectedText) {
          return;
        }
        navigator.clipboard.writeText(selectedText);
      },
      { signal: abortController.signal },
    );

    const mutationObserver = new MutationObserver(() => {
      inputRef?.scrollIntoView();
    });
    mutationObserver.observe(logsContainerRef!, { childList: true });

    onCleanup(() => {
      abortController.abort();
      mutationObserver.disconnect();
    });
  });

  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (e) => {
    e.preventDefault();

    const prompt = inputRef!.value;
    e.currentTarget.reset();

    // Special commands
    switch (prompt) {
      case "clear": {
        setLogs([]);
        return;
      }
    }

    let command: Command | undefined;
    if (props.commands) {
      command = props.commands.find((command) => command.name === prompt);
    }

    if (!command) {
      command = notFoundCommand;
    }

    setLogs((prev) => [...prev, { prompt, command }]);
  };

  return (
    <div class="font-mono text-sm sm:text-base md:text-xl">
      <div ref={logsContainerRef}>
        <For each={logs()}>
          {(log) => (
            <>
              <div class="flex">
                <div class="select-none">{">"}</div>
                <div class="pl-2">{log.prompt}</div>
              </div>
              <div class="whitespace-pre-wrap">
                <log.command.handler prompt={log.prompt}></log.command.handler>
              </div>
            </>
          )}
        </For>
      </div>
      <div class="flex">
        <div class="select-none">{">"}</div>
        <form class="w-full" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            autofocus={true}
            spellcheck={false}
            class="w-full pl-2 outline-none"
          />
        </form>
      </div>
    </div>
  );
};
