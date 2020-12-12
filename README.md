# pine 🍍

Utility library for deno with an FP bent.

You should be able to pull all functions straight from mod like `import { take } from "https://deno.land/x/pine/mod.ts"`

I highly recommend looking at the test file for a function to see how to use it.

## stability
Most of the api should be pretty stable, but for now I would pin a version as I am planning to rewrite some of the function implementations, and add things like automatic currying.


## functions implemented so far:


### add
#### `add(x: number, y: number): number`
Returns the numbers added together

`add(2, 3) == 5`


### all
#### `all<T>(pred: (item: T) => boolean, list: T[]): boolean`
Returns wether all items in `list` return true when applied to the function

`all(x => x > 1, [2, 3, 4]) == true`


### any
#### `any<T>(pred: (item: T) => boolean, list: T[]): boolean`
Returns wether any item in the `list` returns true when applied to the function

`any(x => x > 1, [0, 1, 2]) == true`


### chunkEvery
#### `chunkEvery<T>(count: number, list: T[]): T[][]`
Chunks the list by `count` excess are thrown away

`chunkEvery(2, [1, 2, 3, 4, 5]) == [[1, 2], [3, 4]]


### clamp
#### `clamp(min: number, max: number, value: number): number`
Returns a `number` bound between `min` and `max`

`clamp(0, 10, 20) == 10`


### comp
#### `comp<T, U, V>(first: (T) => U, second: (U) => V): (T) => V`
Returns a function that is the same as if you took the output from `first` and applied it to `second`

```ts
const inc = x => x + 1
const double = x => x * 2
const fun = comp(inc, double)
fun(2) === 6
```


### contains
#### `contains<T>(item: T, list: T[]): boolean`
Returns wether `item` is present in the `list`

`contains(1, [1, 2, 3]) == true`


### dec
#### `dec(n: number): number`
Returns one less than `n`

`dec(3) == 2`


### enumerate
#### `enumerate<T>(list: T[]): [number, T] []`
Returns an array of tuples having the signature `[index, item]`

`enumerate(['a', 'b', 'c']) == [[0, 'a'], [1, 'b'], [2, 'c']]`


### eq
#### `eq<T>(x: T, y: T): Boolean`
Returns wether two arguments are equal

`eq(2, 2) === true`


### f
#### `f(): boolean`
Returns false

`f() == false`


### filter
#### `filter<T>(pred: (T) => bool, list: T[]): T[]`
Returns all items in the list where `T` satisfies `pred`

`filter(isEven, [1, 2, 3, 4]) == [2, 4]`


### first
#### `first<T>(list: T[]): T[]`
Returns all items in the array except the last one
`first([1, 2, 3]) == [1, 2]`


### flip
#### `flip(fn: Function): Function`
Takes a function with two parameters

Returns the function with the arguments reversed 


### fold
#### `fold<T, U>(fn: (acc: U, x: T) => U, acc: U, list: T[]): U`
Takes a reducer, an initial accumulator value, and a list of items. Applies the function on the accumulator, and each item of the list as it iterates through and returns the final accumulator.

`fold(add, 0, [1, 2, 3]) == 6`


### frequencies
#### `frequencies<T>(list: <T>): Map<T, number>`
Returns a frequency table created from the list, in a Map data structure

`frequencies([1, 1, 2, 2, 2], Map{ 1: 2, 2: 3})`


### gt
#### `gt(x: number, y: number): boolean`
Returns wether `y` is greater than `x`

`gt(1, 2) === true`


### hasKey
#### `hasKey(key: keyof any, obj: Object): boolean`
Returns wether the object has the given key

`hasKey("x", {x: 1}) == true`


### head 
#### `head<T>(list: T[]): T`
Returns the first item in a `list`

`head([1, 2, 3]) == 1` 


### identity
#### `identity<T>(item: T): T1`
Returns the item passed in

`identity(5) == 5`


### inc
#### `inc(n: number): number`
Returns one higher than `n`

`inc(1) == 2`


### indexMap
#### `indexMap<T, U>(fn: (i: number, item: T) => U, list: T[]): U`
Runs a function for every item in the list supplying the index, and the item as arguments

`indexMap((i, item) => i + item, [5, 5, 5]) == [5, 6, 7]`


### isEmpty
#### `isEmpty<T>(list: T[]): boolean`
Returns wether the given `list` is empty

`isEmpty([]) == true`


### isEven
#### `isEven(n: number): boolean`
Returns wether the given number is even
`isEven(2) == true`


### isOdd
#### `isOdd(n: number): boolean`
Returns wether the given number is odd
`isOdd(3) == true`


### last
#### `last<T>(list: T[]): T`
Returns the last item in a `list`
`last([1, 3, 2]) == 2`


### length
#### `length<T>(list: T[]): number`
Returns the length of the `list`

`length([1, 1, 1]) == 3`


### lt
#### `lt(x: number, y: number): boolean`
Returns wether `y` is less than `x`

`lt(4, 1) === true`


### map
#### `map<T, U>(fn: T => U, list: T[]): U`
Applies a function to each item in a list, returning a new list of the results of each call


### mapGet
#### `mapGet<K, V>(key: K, map: Map<K, V>): V`
Returns the value for the key `key` on the map. Throws an error if the key is not found


### mapHas
#### `mapHas<K, V>(key: K, map: Map<K, V>): boolean`
Returns whether a map has the given key


### mapSet
#### `mapSet<K, V>(key: K, value: V, Map<K, V>): Map<K, V>`
Returns a new map based off the one passed in with the key `key` set to `value`


### max
#### `max(x: number, y: number): number`
Returns the larger of two numbers

`max(2, 4) == 4`


### maxBy
#### `maxBy<T>(fn: (item: T) => number, x: number, y: number): T`
Returns then larger between `x` and `y` when applied to `fn`

```ts
const first = { x: 4 };
const second = { x: 5};
maxBy(o => o.x, first, second) == second
```

### maximum
#### `max(list: number[]): number`
Returns the largest item in the `list`

`maximum([1, 2, 3]) = 3`

### min
#### `min(x: number, y: number): number`
Returns the smaller of two numbers

`min(2, 4) == 2`


### minBy
#### `minBy<T>(fn: (item: T) => T, x: T, y: T): T
Returns the smaller of originals from applying the function to both items

```ts
const first = { x: 4 }
const second = { x: 5}
minBy(o => o.x, first, second) == first
```


### minimum
#### `minimum(list: number[]): number`
Returns the smallest item in the `list`

`minimum([1, 2, 3]) == 1`


### not
#### `not(b: boolean): boolean`
Returns the opposite of the applied boolean

`not(true) == false`


### prop
### `prop(prop: string, obj: Record<string, unknown>): unknown`
Returns the `prop` off of the `object`

`prop('x', {x: 1}) === 1`


### range
### `range(start: number, stop: number): number[]`
Returns an array of numbers from `start` to `stop` inclusive

`range(1, 3) == [1, 2, 3]`


### reduce
#### `reduce<T>(fn: (x: T, y: T) => T, list: T[]): T`
Shorthand for call to `fold` where the initial value is the first item of the list, and iterates through the rest of the list

`reduce(add, [1, 2, 3]) == 6`


### repeat
#### `repeat<T>(count: number, item: T): T[]`
Returns an array of `count` length with `item` repeated

`repeat(3, "apple") == ["apple", "apple", "apple"]


### reverse
#### `reverse<T>(list: T[]): T[]`
Returns the `list` in the reversed order

`reverse([1, 2, 3]) == [3, 2, 1]`


### scan
#### `scan<T, U>(fn: (x: T) => U, init: U, list: T[]): U[]`
Iterates over the `list` in the same way as `fold`, but saves all steps along the way.

`scan(add, 0, [1, 2, 3]) == [0, 1, 3, 6]`


### sum
#### `sum(list: number[]): number`
Returns the sum of all numbers in `list`

`sum([1, 2, 3]) === 6`


### sumby
#### `sumBy<T>(fn: (item: T) => number, list: T[]): number`
Returns the sum of applying `fn` to all items in `list`

```ts
const first = { x: 1};
const second = { x: 2};
const third = { x: 3 };
const list = [first, second, third];
sumBy(o => o.x, list) === 6
```


### t
### `t(): boolean`
Returns true
`t() == true`


### tail
### `tail<T>(list: T[]); T[]`
Returns all items after the first in a list
`tail([1, 2, 3]) == [2, 3]`


### take
#### `take<T>(count: number, list: T[]): T[]`
Returns the first `count` items from a `list`

`take(2, [1, 2, 3, 4, 5]) == [1, 2]`


### takeLast
#### `takeLast<T>(count: number, list: T[]): T[]`
Returns the last `count` items from a `list`

`takeLast(2, [1, 2, 3, 4, 5]) == [4, 5]`


### takeWhile
#### `takeWhile<T>(pred: (T) => boolean, list: T[]): T[]`
Returns elements of the list until it first gets a false value from the predicate. Does not return the value that returned false

`takeWhile(x => x < 2, [1, 1, 1, 3]) == [1, 1, 1]`


### zip
#### `zip<T, U>(first: T[], second: U[]): [T, U][]`
Zips two arrays together into an array of tuples. Extra items from the longer will be ignored

`zip([1, 2, 3, 4], ["a", "b", "c"]) == [[1, "a"], [2, "b"], [3, "c"]]`


## TODO:
- pipe/compose
- more tests
- automatic currying
- Option/Result types
- more tests
- more tests
- better way to handle type of functions


## Contribute?
Want to send a pr? I'm pretty open. If you're adding a new function, it needs to do three things:
- be in a new file
- have a matching test file
- export from mod
