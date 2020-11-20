# pine 🍍

Utility library for deno with an FP bent.

You should be able to pull all functions straight from mod like `import { take } from "https://denopkg.com/alexstory/pine/mod.ts"`

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
Returs the value within the bounds set by `min` and `max` (both inclusive)

`clamp(0, 10, 20) == 10`

### flip
#### `flip(fn: Function): Function`
Takes a function with two parameters

Returns the function with the arguments reversed 


### head 
#### `head<T>(list: T[]): T`
Returns the first item in a `list`

`head([1, 2, 3]) == 1` 


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


### min
#### `min(x: number, y: number): number`
Returns the smaller of two numbers

`min(2, 4) == 2`

### reverse
#### `reverse<T>(list: T[]): T[]`
Returns the `list` in the reversed order

`reverse([1, 2, 3]) == [3, 2, 1]`

### take
#### `take<T>(n: number, list: T[]): T[]`
Returns the first `n` items from a `list`

`take(2, [1, 2, 3, 4, 5]) == [1, 2]`


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