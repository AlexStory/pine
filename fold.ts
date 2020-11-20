export function fold<T, U>(fn: (acc: U, x: T) => U, acc: U, list: T[]): U {
  let result = acc;

  for (const item of list) {
    result = fn(result, item);
  }

  return result;
}
