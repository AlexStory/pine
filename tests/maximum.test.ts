import { assertEquals } from "../deps.ts";
import { maximum } from "../mod.ts";

Deno.test("maximum works", () => {
  assertEquals(100, maximum([1, -22222222, 100, 99, 100, 3]));
});
