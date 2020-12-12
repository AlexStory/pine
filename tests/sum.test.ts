import { assertEquals } from "../deps.ts";
import { sum } from "../mod.ts";

Deno.test("sum works", () => {
    const nums = [1, 2, 3];
    const actual = sum(nums);
    const expected = 6;
    assertEquals(actual, expected);
});