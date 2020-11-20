import { assertEquals } from "./deps.ts"
import { length } from "./length.ts"

Deno.test("length works", () => {
    const nums = [1, 2, 3];
    assertEquals(3, length(nums));
})