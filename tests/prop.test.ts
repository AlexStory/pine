import { assertEquals } from "../deps.ts";
import { prop } from "../mod.ts";

Deno.test("prop works", () => {
    const ob = { x: 1 }
    const actual = prop("x", ob);
    const expected = 1;
    assertEquals(actual, expected);
})