import { assertEquals } from "../deps.ts";
import { minimum } from "../mod.ts";

Deno.test("minimum works", () => {
  assertEquals(-100, minimum([0, 45, 23, -10, -100]));
});
