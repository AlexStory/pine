import { assert } from "../deps.ts";
import { all } from "../mod.ts";

Deno.test("all works", () => {
    const nums = [2, 3, 4];
    const actual = all(x => x > 1, nums);
    assert(actual);

    const falsey = all(x => x % 2 === 0, nums);
    assert(!falsey);
});