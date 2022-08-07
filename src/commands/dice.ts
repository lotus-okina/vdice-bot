import assert from "assert";
import { CommandHandler } from "./types.js";

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
      return `振るダイスの指定がありません（例: \`!${name} 1d6\`）`;
    }

    assert(match[1]);
    assert(match[2]);

    const dices = parseInt(match[1]);
    const faces = parseInt(match[2]);

    if (dices <= 0 || faces <= 0) {
      return "ダイスが無です";
    }

    if (dices > maxDices || faces > maxFaces) {
      return `**デッッッッッッカ！！！**\n（ダイスの数は${maxDices}まで、面の数は${maxFaces}までです）`;
    }

    console.log(`Run ${name} ${dices}d${faces}`);

    const results = [];
    for (let i = 0; i < dices; i++) {
      results.push(rollDice(faces));
    }

    assert(results[0]);
    let msg = results[0].toString();
    if (dices === 1) {
      return msg;
    }

    let sum = results[0];
    for (let i = 1; i < dices; i++) {
      const res = results[i];
      assert(res);
      sum += res;
      msg += " + " + res.toString();
    }

    msg += " = " + sum.toString();

    return msg;
  }
}

function rollDice(faces: number): number {
  assert(faces > 0);
  return Math.trunc(Math.random() * faces) + 1;
}
