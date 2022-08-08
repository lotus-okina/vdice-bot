import { DiceHandler } from "./commands/dice.js";
import { PickHandler } from "./commands/pick.js";
import { NormalCommandHandler } from "./commands/normal_command.js";
import { keywords } from "./lists.js";
import { isKeyOf } from "./utils.js";

const commands = {
  nijidice: new NormalCommandHandler("nijidice", keywords.Niji),
  nijifem: new NormalCommandHandler("nijifem", keywords.NijiFem),
  nijimas: new NormalCommandHandler("nijimas", keywords.NijiMas),
  hololive: new NormalCommandHandler("hololive", keywords.Holo),
  dice: new DiceHandler("dice"),
  pick: new PickHandler("pick"),
} as const;

export function handleCommand(postContent: string): string | null {
  // ひとまずコマンドは英数字+"_"でできていることにする
  // 必要になったらそのときになんとかする
  const match = /^!(\w+)/.exec(postContent);

  if (match === null || match[1] === undefined) return null;

  const name = match[1];

  if (isKeyOf(commands, name)) {
    return commands[name].handle(postContent);
  }

  console.log(`No matching command for ${name}`);
  return null;
}
