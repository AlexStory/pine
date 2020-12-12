import { assertEquals } from "../deps.ts";
import { head } from "../head.ts";

Deno.test("head works", () => {
  const nums = [1, 2, 3, 4, 5];
  assertEquals(1, head(nums));
});
