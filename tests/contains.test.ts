import { assert } from "../deps.ts";
import { contains } from "../mod.ts";
import { contains as containsC } from "../mod.curried.ts";

Deno.test("contains works", () => {
  const list = [1, 2, 3];
  const actual = contains(2, list);
  assert(actual);

  const falsey = contains(4, list);
  assert(!falsey);
});

Deno.test("contains works curried", () => {
  const list = [1, 2, 3];
  const has2 = containsC(2);
  const actual = has2(list);
  assert(actual);
});
