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

    // コマンドに続く数値部分を取り出す
    const regex = new RegExp(`!${name}\\s*(\\d*)`);
    const match = regex.exec(postContent);

    assert(match);
    assert(match[1] !== undefined);

    if (match[1] === "") {
      // 数字がない場合は1人だけ選ぶ
      console.log(`Command ${name}`);
      return select(list, 1);
    } else {
      const n = parseInt(match[1]);
      console.log(`Command ${name} ${n}`);
      return select(list, n);
    }
  }
}
