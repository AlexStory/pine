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

### clamp
#### `clamp(min: number, max: number, value: number): number`
Returns the value within the bounds set by `min` and `max` (both inclusive)

`clamp(0, 10, 20) == 10`


### dec
#### `dec(n: number): number`
Returns one less than `n`

`dec(3) == 2`



### enumerate
#### `enumerate<T>(list: T[]): [number, T] []`
Returns an array of tuples having the signature `[index, item]`

`enumerate(['a', 'b', 'c']) == [[0, 'a'], [1, 'b'], [2, 'c']]`


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
### `fold<T, U>(fn: (acc: U, x: T) => U, acc: U, list: T[]): U`
Takes a reducer, an initial accumulator value, and a list of items. Applies the function on the accumulator, and each item of the list as it iterates through and returns the final accumulator.

`fold(add, 0, [1, 2, 3]) == 6`

### head 
#### `head<T>(list: T[]): T`
Returns the first item in a `list`

`head([1, 2, 3]) == 1` 


### inc
#### `inc(n: number): number`
Returns one higher than `n`

`inc(1) == 2`


### indexMap
#### `indexMap<T, U>(fn: (i: number, item: T) => U, list: T[]): U`
Runs a function for every item in the list supplying the index, and the item as arguments

`indexMap((i, item) => i + item, [5, 5, 5]) == [5, 6, 7]`


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


### map
#### `map<T, U>(fn: T => U, list: T[]): U`
Applies a function to each item in a list, returning a new list of the results of each call


### max
#### `max(x: number, y: number): number`
Returns the larger of two numbers

`max(2, 4) == 4`


### maximum
#### `max(list: number[]): number`
Returns the largest item in the `list`

`maximum([1, 2, 3]) = 3`

### min
#### `min(x: number, y: number): number`
Returns the smaller of two numbers

`min(2, 4) == 2`


### minimum
#### `minimum(list: number[]): number`
Returns the smallest item in the `list`

`minimum([1, 2, 3]) == 1


### not
#### `not(b: boolean): boolean`
Returns the opposite of the applied boolean

`not(true) == false`


### reduce
### `reduce<T>(fn: (x: T, y: T) => T, list: T[]): T`
Shorthand for call to `fold` where the initial value is the first item of the list, and iterates through the rest of the list

`reduce(add, [1, 2, 3]) == 6`


### reverse
#### `reverse<T>(list: T[]): T[]`
Returns the `list` in the reversed order

`reverse([1, 2, 3]) == [3, 2, 1]`


### scan
#### `scan<T, U>(fn: (x: T) => U, init: U, list: T[]): U[]`
Iterates over the `list` in the same way as `fold`, but saves all steps along the way.

`scan(add, 0, [1, 2, 3]) == [0, 1, 3, 6]`


### t
### `t(): boolean`
Returns true
`t() == true`


### tail
### `tail<T>(list: T[]); T[]`
Returns all items after the first in a list
`tail([1, 2, 3]) == [2, 3]`


### take
#### `take<T>(n: number, list: T[]): T[]`
Returns the first `n` items from a `list`

`take(2, [1, 2, 3, 4, 5]) == [1, 2]`


### takeWhile
#### `takeWhile<T>(pred: (T) => boolean, list: T[]): T[]`
Returns elements of the list until it first gets a false value from the predicate. Does not return the value that returned false

`takeWhile(x => x < 2, [1, 1, 1, 3]) == [1, 1, 1]`

## TODO:
- more tests
- automatic currying
- Option/Result types
- more tests
- redo logic for map and length
- more tests
- better way to handle type of functions


## Contribute?
Want to send a pr? I'm pretty open. If you're adding a new function, it needs to do three things:
- be in a new file
- have a matching test file
- export from mod