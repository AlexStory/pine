import { assertEquals } from "../deps.ts";
import { curry } from "../mod.ts";

Deno.test("curry works", () => {
    const add = (x: number, y: number) => x + y
    const addThree = (x: number, y: number, z: number): number => x + y + z;
    const curried = curry(add);
    const num: number = curried(1, 2);
    const addOne: (x: number) => number = curried(1);
    const threeCurried = curry(addThree);
    const oneMore: (x: number) => number = threeCurried(1, 2);

    assertEquals(oneMore(4), 7);
    assertEquals(num, 3);
    assertEquals(addOne(2), 3);
});