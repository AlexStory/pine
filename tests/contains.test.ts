import { assert } from "../deps.ts";
import { contains } from "../mod.ts";

Deno.test("contains works", () => {
    const list = [1, 2, 3];
    const actual = contains(2, list);
    assert(actual);

    const falsey = contains(4, list);
    assert(!falsey);
})