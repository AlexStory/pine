import { assertEquals } from "./deps.ts";
import { frequencies } from "./mod.ts";

Deno.test("frequencies works", () => {
  const list = [1, 1, 2, 2, 2];
  const freq = frequencies(list);
  assertEquals(freq.get(1), 2);
  assertEquals(freq.get(2), 3);
});
