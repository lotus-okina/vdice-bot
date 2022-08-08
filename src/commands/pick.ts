import assert from "assert";
import { CommandHandler } from "./types.js";
import { keywords } from "../lists.js";
import { select, keysOf } from "../utils.js";

export class PickHandler extends CommandHandler {
  handle(postContent: string) {
    const name = this.name;

    const regex = new RegExp(`!${name}\\s*(\\d*)\\s*\\[([^\\]]*)\\]`);
    const match = regex.exec(postContent);

    if (match === null) {
      return `指定が正しくありません（例: \`!${name} [ドラ友、ドラ友じゃない]\`）`;
    }

    assert(match[1] !== undefined);
    assert(match[2] !== undefined);

    const items = match[2]
      .split(/,|、/)
      .map((s) => s.trim())
      .filter((s) => s !== "");

    // キーワードを展開する
    // キーワード同士で内容に被りがあるかもしれないのでユニーク処理をかける
    const itemsExpanded = Array.from(
      new Set(items.map((s) => expandKeyword(s)).flat())
    );

    if (items.length <= 0) {
      return "無";
    }

    if (match[1] === "") {
      console.log(`Command ${name} [${items.join("、")}]`);
      return select(itemsExpanded, 1);
    } else {
      const n = parseInt(match[1]);
      console.log(`Command ${name} ${n} [${items.join("、")}]`);
      return select(itemsExpanded, n);
    }
  }
}

function expandKeyword(s: string) {
  const keyArray = keysOf(keywords);
  for (const key of keyArray) {
    if (key.toLowerCase() === s.toLowerCase()) {
      return keywords[key];
    }
  }
  return s;
}
