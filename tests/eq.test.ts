import { assert } from "../deps.ts";
import { eq } from "../mod.ts";

Deno.test("eq works", () => {
  assert(eq(2, 2));
  assert(eq("apple", "apple"));
});
