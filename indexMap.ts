export function indexMap<T, U>(fn: (i: number, item: T) => U, list: T[]): U[] {
  const results: U[] = [];
  let i = 0;

  for (const item of list) {
    const result = fn(i, item);
    results.push(result);
    i++;
  }

  return results;
}
