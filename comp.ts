/**
 * Returns a function that will be the result of calling the two functions together.
 * @param {(T) => U} first 
 * @param {(U) => V} second 
 * @returns {(T) => V} 
 */
export function comp<T, U, V>(
  first: (x: T) => U,
  second: (x: U) => V,
): ((x: T) => V) {
  return function (x: T): V {
    return second(first(x));
  };
}
