import { assertEquals } from "../deps.ts";
import { pipe } from "../mod.ts";

Deno.test("pipe works", () => {
    const addOne = (x: number) => x + 1
    const double = (x: number) => x * 2

    const addTwoAndDouble: (x: number) => number = pipe(
        addOne,
        addOne,
        double,
    )

    const actual = addTwoAndDouble(1);
    const expected = 6;

    assertEquals(actual, expected);
})



