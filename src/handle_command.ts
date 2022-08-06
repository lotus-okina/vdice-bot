import sampleSize from "lodash/sampleSize.js"
import nijiFemList from "./lists/niji_jp_fem.js";
import nijiMasList from "./lists/niji_jp_mas.js";

export function handleCommand(s: string): string | null {
  for (const [name, list] of commandMap) {
    const regex = new RegExp(`!${name}\\s*(\\d*)`);
    const match = regex.exec(s);
    if (match !== null) {
      if (match[1] !== undefined && match[1] !== '') {
        const n = parseInt(match[1])
        const l = sampleSize(list, n);
        return l.join("、")
      } else {
        // 数字が見つからない場合は1人だけ選ぶ
        const l = sampleSize(list, 1);
        return l[0] as string;
      }
    }
  }
  return null;
}

// コマンド名と、選出対象のマップ
const commandMap: [string, string[]][] = [
  ["nijidice", nijiFemList.concat(nijiMasList)],
  ["nijifem",  nijiFemList],
  ["nijimas",  nijiMasList]
]
