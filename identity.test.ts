import { assertEquals } from "./deps.ts";
import { identity } from "./mod.ts";

Deno.test("identity works", () => {
    const x = 5;
    assertEquals(identity(x), x);
})