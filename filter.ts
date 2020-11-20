export function filter<T>(pred: (item: T) => boolean, list: T[]): T[] {
  const results = [];

  for (const item of list) {
    if (pred(item)) {
      results.push(item);
    }
  }

  return results;
}
