import assert from "assert";
import { CommandHandler } from "./types.js";
import { rollDice } from "../utils.js";

export class DiceHandler extends CommandHandler {
  static readonly maxDices = 50;
  static readonly maxFaces = 1000;

  handle(postContent: string) {
    const name = this.name;
    const maxDices = DiceHandler.maxDices;
    const maxFaces = DiceHandler.maxFaces;

    const regex = new RegExp(`!${name}\\s*(\\d+)d(\\d+)`);
    const match = regex.exec(postContent);

    if (match === null) {
      return `ダイスの指定が不正です（正しい例: \`!${name} 1d6\`）`;
    }

    assert(match[1]);
    assert(match[2]);

    const dices = parseInt(match[1]);
    const faces = parseInt(match[2]);

    if (dices <= 0 || faces <= 0) {
      return "無";
    }

    if (dices > maxDices || faces > maxFaces) {
      return `**デッッッッッッッッッカ！！！**\n（ダイスの数は${maxDices}まで、面の数は${maxFaces}までです）`;
    }

    console.log(`Command ${name} ${dices}d${faces}`);

    const results = [];
    for (let i = 0; i < dices; i++) {
      results.push(rollDice(faces));
    }

    assert(results[0]);
    let msg = results[0].toString();
    if (dices === 1) {
      return msg;
    }

    // ダイスが複数個の場合は各々の結果と総和を出す
    let sum = results[0];
    for (let i = 1; i < dices; i++) {
      const res = results[i];
      assert(res);
      sum += res;
      msg += ` + ${res.toString()}`;
    }

    msg += ` = **${sum.toString()}**`;

    return msg;
  }
}
