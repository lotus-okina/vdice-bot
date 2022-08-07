import assert from "assert";
import sampleSize from "lodash/sampleSize.js";
import { CommandHandler } from "./types.js";

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

    // コマンドに続く数値部分を取り出す
    const regex = new RegExp(`!${name}\\s*(\\d*)`);
    const match = regex.exec(postContent);

    assert(match);

    if (match[1] !== undefined && match[1] !== "") {
      const n = parseInt(match[1]);
      if (n <= 0) {
        return "無";
      }

      console.log(`Command ${name} ${n}`);

      const l = sampleSize(list, n);
      return l.join("、");
    } else {
      // 数字が見つからない場合は1人だけ選ぶ
      console.log(`Command ${name}`);

      const l = sampleSize(list, 1);
      assert(l[0]);
      return l[0];
    }
  }
}
