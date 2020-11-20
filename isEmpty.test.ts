import { assert } from "./deps.ts";
import { isEmpty } from "./mod.ts";

Deno.test("isEmpty works", () => {
    assert(isEmpty([]));
    assert(!isEmpty([1]))
})