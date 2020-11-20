import { assertEquals } from "./deps.ts";
import { min } from "./mod.ts";

Deno.test("min works", () => {
  assertEquals(2, min(2, 4));
  assertEquals(-6, min(-6, 3));
});
