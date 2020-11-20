import { assertEquals } from "./deps.ts";
import { minBy } from "./mod.ts";


Deno.test("minBy works", () => {
    const x = 4;
    const y = 6;
    const expected = 4;
    const actual = minBy(x => x, x, y);
    assertEquals(actual, expected);
})