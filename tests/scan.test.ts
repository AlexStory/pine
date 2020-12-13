import { assertEquals } from "../deps.ts";
import { scan } from "../mod.ts";
import { scan as scanC } from "../mod.curried.ts";

const add = (x: number, y: number) => x + y;

Deno.test("scan works", () => {
  const numbers = [1, 2, 3];
  const expected = [1, 2, 4, 7];
  const actual = scan(add, 1, numbers)

  assertEquals(actual, expected);
});

Deno.test("scan works curried", () => {
  const numbers = [1, 2, 3];
  const scanAdd = scanC(add, 1);
  const actual = scanAdd(numbers);
  const expected = [1, 2, 4, 7];

  assertEquals(actual, expected);
});
