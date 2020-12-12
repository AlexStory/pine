import { assert } from "./deps.ts";
import { lt } from "./mod.ts";

Deno.test("lt works", () => {
    const actual = lt(5, 1);
    assert(actual);

    const falsey = lt(1, 100);
    assert(!falsey);
})