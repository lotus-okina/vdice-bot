import type { CommandHandler } from "./commands/types.js";
import { DiceHandler } from "./commands/dice.js";
import { PickHandler } from "./commands/pick.js";
import { NormalCommandHandler } from "./commands/normal_command.js";
import { nijiF, nijiM, hololive } from "./lists.js";

const commands: Record<string, CommandHandler> = {
  nijidice: new NormalCommandHandler("nijidice", nijiF.concat(nijiM)),
  nijifem: new NormalCommandHandler("nijifem", nijiF),
  nijimas: new NormalCommandHandler("nijimas", nijiM),
  hololive: new NormalCommandHandler("hololive", hololive),
  dice: new DiceHandler("dice"),
  pick: new PickHandler("pick"),
};

export function handleCommand(postContent: string): string | null {
  // ひとまずコマンドは英数字+"_"でできていることにする
  // 必要になったらそのときになんとかする
  const match = /^!(\w+)/.exec(postContent);

  if (match === null || match[1] === undefined) return null;

  const name = match[1];

  const command = commands[name];
  if (command !== undefined) {
    return command.handle(postContent);
  }

  console.log(`No matching command for ${name}`);
  return null;
}
