import { assertEquals } from "../deps.ts";
import { last } from "../mod.ts";

Deno.test("last works", () => {
  assertEquals(5, last([1, 2, 3, 4, 5]));
});
