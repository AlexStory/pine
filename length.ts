export function length<T>(list: T[]): number {
  let count = 0;
  for (const item of list) {
    count++;
  }
  return count;
}
