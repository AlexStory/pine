/**
 * Curries a function, allowing you to partially apply it
 * @param {Function} func 
 * @returns {Function}
 */
// deno-lint-ignore ban-types
export function curry(func: Function) {
  // deno-lint-ignore no-explicit-any
  return function curried(this: any, ...args: any[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      // deno-lint-ignore no-explicit-any
      return (...args2: any[]) => {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
