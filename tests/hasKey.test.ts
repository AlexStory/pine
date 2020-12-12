import { assert } from "../deps.ts";
import { hasKey } from "../mod.ts";

Deno.test("hasKey works", () => {
  const dog = {
    name: "rex",
  };

  assert(hasKey("name", dog));
  assert(!hasKey("legs", dog));
});
