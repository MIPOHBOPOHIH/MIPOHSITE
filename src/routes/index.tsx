import { Terminal } from "~/components/terminal";
import { commands } from "~/features/commands";

const asciiBanner = `@@@@@@@   @@@  @@@  @@@  @@@  @@@   @@@@@@   @@@@@@@@
@@@@@@@@  @@@  @@@  @@@  @@@  @@@  @@@@@@@@  @@@@@@@@
@@!  @@@  @@!  @@!  @@!  @@!  !@@  @@!  @@@  @@!
!@!  @!@  !@!  !@!  !@!  !@!  @!!  !@!  @!@  !@!
@!@!!@!   @!!  !!@  @!@   !@@!@!   @!@!@!@!  @!!!:!
!!@!@!    !@!  !!!  !@!    @!!!    !!!@!!!!  !!!!!:
!!: :!!   !!:  !!:  !!:   !: :!!   !!:  !!!  !!:
:!:  !:!  :!:  :!:  :!:  :!:  !:!  :!:  !:!  :!:
::   :::   :::: :: :::    ::  :::  ::   :::   :: ::::
:   : :    :: :  : :     :   ::    :   : :  : :: ::

❄️ Welcome to rwxae!

`;

const paddingSize =
  Math.max(...commands.map((command) => command.name.length)) + 2;

const docs = `COMMANDS:
  ${commands.map((command) => `${command.name.padStart(paddingSize)}  ${command.description}`).join("\n")}

`;

export default function Home() {
  return (
    <div class="p-8">
      <pre class="font-bold text-xl">{asciiBanner}</pre>
      <pre class="text-xl">{docs}</pre>
      <Terminal commands={commands} />
    </div>
  );
}
