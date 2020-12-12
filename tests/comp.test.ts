import { assertEquals } from "../deps.ts";
import { comp } from "../mod.ts";

Deno.test("comp works", () => {
    const inc = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    const fun = comp(inc, double);
    const actual = fun(2);
    const expected = 6;
    assertEquals(actual, expected);
})