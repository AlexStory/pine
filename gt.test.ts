import { assert } from "./deps.ts";
import { gt } from "./mod.ts";

Deno.test("gt works", () => {
    const actual = gt(1, 6);
    assert(actual);

    const falsey = gt(5, 1);
    assert(!falsey);
})