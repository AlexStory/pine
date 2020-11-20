import { assertEquals } from "./deps.ts";
import { add, scan } from "./mod.ts";

Deno.test("scan works", () => {
  const numbers = [1, 2, 3];
  const expected = [1, 2, 4, 7];
  assertEquals(
    scan(add, 1, numbers),
    expected,
  );
});
