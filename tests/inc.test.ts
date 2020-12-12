import { assertEquals } from "../deps.ts";
import { inc } from "../mod.ts";

Deno.test("inc works", () => {
  assertEquals(2, inc(1));
  assertEquals(-1, inc(-2));
  assertEquals(0, inc(-1));
});
