import { assertEquals } from "../deps.ts";
import { add } from "../mod.ts";

Deno.test("add works", () => {
  assertEquals(5, add(2, 3));
});
