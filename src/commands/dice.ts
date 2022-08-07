import assert from "assert";

export const name = "dice";
const maxDices = 50;
const maxFaces = 1000;

export function handleDice(s: string): string {
  const regex = new RegExp(`!${name}\\s*(\\d+)d(\\d+)`);
  const match = regex.exec(s);

  if (match === null) {
    return `振るダイスの指定がありません（例: \`!${name} 1d6\`）`;
  }

  if (match[1] === undefined || match[2] === undefined) {
    // ここには来ないはず
    console.warn("Assertion failed in dice");
    return "「だから太陽に近づくなって言ったのに」";
  }

  const dices = parseInt(match[1]);
  const faces = parseInt(match[2]);

  if (dices <= 0 || faces <= 0) {
    return "ダイスが虚無です";
  }

  if (dices > maxDices || faces > maxFaces) {
    return `**デッッッッッッカ！！！**\n（ダイスの数は${maxDices}まで、面の数は${maxFaces}までです）`;
  }

  const results = [];
  for (let i = 0; i < dices; i++) {
    results.push(rollDice(faces));
  }

  if (results.length !== dices) {
    // ここには来ないはず
    console.warn("Array length mismatch in dice");
    return "「ぺこら土星にいるよ」";
  }

  assert(results[0]);
  let msg = results[0].toString();
  if (dices === 1) {
    return msg
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

function rollDice(faces: number): number {
  assert(faces > 0);
  return Math.trunc(Math.random() * faces) + 1;
}
