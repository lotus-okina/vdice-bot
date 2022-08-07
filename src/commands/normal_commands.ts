import assert from "assert";
import sampleSize from "lodash/sampleSize.js";

export function handleNormalCommand(
  name: string,
  list: string[],
  s: string
): string {
  // コマンドに続く数値部分を取り出す
  const regex = new RegExp(`!${name}\\s*(\\d*)`);
  const match = regex.exec(s);

  if (match === null) {
    // コマンドの存在は確認してあるのでここには来ないはず
    console.warn("Assertion failed in handleNormalCommand");
    return "「早くバケツで太陽すくって」";
  }

  if (match[1] !== undefined && match[1] !== "") {
    const n = parseInt(match[1]);
    console.log(`Command ${name} ${n}.`);

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
