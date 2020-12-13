import { assertEquals } from "../deps.ts";
import { zip } from "../mod.ts";
import { zip as zipC } from "../mod.curried.ts";

Deno.test("zip works", () => {
  const a = ["a", "b", "c"];
  const b = [1, 2, 3];
  const expected = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ];
  const actual = zip(a, b);
  assertEquals(actual, expected);
});

Deno.test("zip ignores longer list's extra items", () => {
  const a = ["a", "b", "c"];
  const b = [1, 2, 3, 4];
  const expected = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ];
  const actual = zip(a, b);
  assertEquals(actual, expected);
});

Deno.test("zip works curried", () => {
  const nums = [1, 2, 3];
  const letters = ["a", "b", "c"];
  const zipNums = zipC(nums);
  const actual = zipNums(letters);
  const expected = [
    [1, "a"],
    [2, "b"],
    [3, "c"]
  ];

  assertEquals(actual, expected);
});