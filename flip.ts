/**
 * Flips the two arguments of a function 
 * @param fn function to flip
 * @returns fn
 */
export function flip<T, U, V>(fn: (f: T, g: U) => V): (g: U, f: T) => V {
  return (x: U, y: T) => fn(y, x);
}
