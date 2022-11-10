import sampleSize from "lodash/sampleSize.js";
import assert from "assert";
// https://stackoverflow.com/a/58962072
export function isKeyOf<T>(obj: T, key: PropertyKey): key is keyof T {
  return key in obj;
}

// https://stackoverflow.com/a/70974124
export function keysOf<T extends Record<string, unknown>>(object: T) {
  return Object.keys(object) as (keyof T)[];
}

export function rollDice(faces: number): number {
  assert(faces > 0);
  return Math.trunc(Math.random() * faces) + 1;
}

const maxCount = 25;

export function select(list: string[], n: number): string {
  if (n <= 0) {
    return "無";
  }

  if (n > maxCount) {
    return `選べる数は${maxCount}までです`;
  }

  if (n > list.length) {
    return `対象よりも多い数を選ぶことはできません（対象の数: ${list.length}）`;
  }

  return sampleSize(list, n).join("、");
}
