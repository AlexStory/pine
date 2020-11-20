export function take<T>(n: number, list: T[]): T[] {
  var results = [];
  for (let i = 0; i < n; i++) {
    if (list.length > 0 && list.length > i) {
      results.push(list[i]);
    }
  }
  return results;
}
