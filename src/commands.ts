import * as dice from "./commands/dice.js";
import { handleNormalCommand } from "./commands/normal_commands.js";
import { nijiFemList, nijiMasList } from "./lists.js";

// 通常コマンド(`!hogecmd \d*`の形式のコマンド)
export interface NormalCommand {
  name: string;
  list: string[];
}

// 特殊コマンド(通常コマンドの形式でないコマンド)
export interface SpecialCommand {
  name: string;
  fn: (s: string) => string;
}

// 通常コマンド(`!hogecmd \d*`の形式のコマンド)
// コマンド名と、選出対象のマップ
export const normalCommandMap: NormalCommand[] = [
  { name: "nijidice", list: nijiFemList.concat(nijiMasList) },
  { name: "nijifem", list: nijiFemList },
  { name: "nijimas", list: nijiMasList },
];

// 特殊コマンド(通常コマンドの形式でないコマンド)
// 投稿内容を全部渡して独自に処理させる
export const specialCommandMap: SpecialCommand[] = [
  { name: dice.name, fn: dice.handleDice },
];

export { handleNormalCommand };
