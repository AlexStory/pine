export function map<T, U>(fn: (x: T) => U, list: T[]): U[] {
  const results = [];
  for (const item of list) {
    results.push(fn(item));
  }

  return results;
}
