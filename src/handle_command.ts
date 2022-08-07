import {
  specialCommandMap,
  normalCommandMap,
  handleNormalCommand,
} from "./commands.js";

export function handleCommand(s: string): string | null {
  // ひとまずコマンドは英数字+"_"でできていることにする
  // 必要になったらそのときになんとかする
  const match = /^!(\w+)/.exec(s);

  if (match === null || match[1] === undefined) return null;

  const cmdName = match[1];

  // 特殊コマンドを先に調べる
  for (const { name, fn } of specialCommandMap) {
    if (name === cmdName) {
      return fn(s);
    }
  }

  // 通常コマンド
  for (const { name, list } of normalCommandMap) {
    if (name === cmdName) {
      return handleNormalCommand(name, list, s);
    }
  }

  console.log(`No matching command for ${cmdName}`);
  return null;
}
