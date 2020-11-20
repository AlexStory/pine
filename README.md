# pine 🍍

Utility library for deno with an FP bent.

You should be able to pull all functions straight from mod like `import { take } from "https://denopkg.com/alexstory/pine/mod.ts`

I highly recommend looking at the test file for a function to see how to use it.

##functions implemented so far:

### flip
#### `flip(fn: Function): Function`
Takes a function with two parameters

Returns the function with the arguments reversed 


### head 
#### `head<T>(list: T[]): T`
Returns the first item in a `list`
 
### take
#### `take<T>(n: number, list: T[]): T[]`
Returns the first `n` items from a `list`
