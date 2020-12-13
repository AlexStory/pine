import { assert } from "../deps.ts";
import { hasKey } from "../mod.ts";
import { hasKey as hasKeyC } from "../mod.curried.ts";

Deno.test("hasKey works", () => {
  const dog = {
    name: "rex",
  };

  assert(hasKey("name", dog));
  assert(!hasKey("legs", dog));
});

Deno.test("hasKey works curried", () => {
  const dog = {
    legs: 4,
  };

  const hasLegs = hasKeyC("legs");
  assert(hasLegs(dog));
});
