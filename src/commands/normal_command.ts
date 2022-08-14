import assert from "assert";
import { CommandHandler } from "./types.js";
import { select } from "../utils.js";

// 通常コマンド(`!hogecmd \d*`の形式のコマンド)
export class NormalCommandHandler extends CommandHandler {
  private readonly list: string[];
  constructor(name: string, list: string[]) {
    super(name);
    this.list = list;
  }

  handle(postContent: string) {
    const name = this.name;
    const list = this.list;

    // 選出数指定がある場合
    const regexWithNum = new RegExp(`!${name}\\s+(\\d+)(?:$|\\s+)`);
    const matchWithNum = regexWithNum.exec(postContent);

    if (matchWithNum !== null) {
      assert(matchWithNum[1] !== undefined);
      const n = parseInt(matchWithNum[1]);
      console.log(`Command ${name} ${n}`);
      return select(list, n);
    }

    // 選出数指定がない場合
    // コマンドが正しく指定されていることは上位関数で
    // チェック済みなので、選出数1として実行する
    console.log(`Command ${name}`);
    return select(list, 1);
  }
}
