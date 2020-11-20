import { assert } from "./deps.ts";
import { f } from "./mod.ts";

Deno.test("f works", () => {
  assert(!f());
});
