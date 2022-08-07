import assert from "assert";
import sampleSize from "lodash/sampleSize.js";
import { CommandHandler } from "./types.js";

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
      .split("、")
      .map((s) => s.trim())
      .filter((s) => s !== "");

    if (items.length <= 0) {
      return "無";
    }

    if (match[1] === "") {
      console.log(`Command ${name} [${items.join("、")}]`);
      const l = sampleSize(items, 1);
      assert(l[0]);
      return l[0];
    } else {
      const n = parseInt(match[1]);
      if (n <= 0) {
        return "無";
      }

      console.log(`Command ${name} ${n} [${items.join("、")}}]`);

      const l = sampleSize(items, n);
      return l.join("、");
    }
  }
}
