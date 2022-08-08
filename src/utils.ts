import assert from "assert";
// https://stackoverflow.com/a/58962072
export function isKeyOf<T>(obj: T, key: PropertyKey): key is keyof T {
  return key in obj;
}

export function rollDice(faces: number): number {
  assert(faces > 0);
  return Math.trunc(Math.random() * faces) + 1;
}
