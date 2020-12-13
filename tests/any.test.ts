import { assert } from "../deps.ts";
import { any } from "../mod.ts";
import { any as anyC } from "../mod.curried.ts";

Deno.test("any works", () => {
  const list = [1, 2, 3];
  const actual = any((x) => x > 1, list);
  assert(actual);

  const anotherList = [1, 3, 5];
  const falsey = any((x) => x % 2 === 0, anotherList);
  assert(!falsey);
});

Deno.test("any works curried", () => {
  const list = [1, 2, 3];
  const overOne = (x: number) => x > 1;
  const anyOverOne = anyC(overOne);
  const actual = anyOverOne(list);
  assert(anyOverOne);
});
