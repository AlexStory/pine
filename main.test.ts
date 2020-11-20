import { assertEquals } from "https://deno.land/std@0.78.0/testing/asserts.ts";

import { flip, take } from "./mod.ts";

Deno.test("flip works", function () {
    const x = 1;
    const y = 2;

    const arrayify = function <T>(x: T, y: T): T[] {
      return [x, y];
    };

    assertEquals(
      [2, 1],
      flip(arrayify)(1, 2),
    );
  });

Deno.test("take works", function() {
  const nums = [1, 2, 3, 4, 5]
  
  assertEquals(
    [1, 2, 3],
    take(3, nums)
  )
})

Deno.test("take will only return available values", function() {
  const nums = [1, 2, 3]
  assertEquals(
    [1, 2, 3],
    take(5, nums)
  )
})
