export function takeWhile<T>(pred: (x: T) => boolean, list: T[]): T[] {
  const results = [];
  for (const item of list) {
    if (pred(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
}
