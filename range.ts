/**
 * Returns an array from start to stop
 * @param {number} start first number in the array 
 * @param {number} stop last number in the array
 * @returns {number[]} 
 */
export function range(start: number, stop: number) {
  if (start > stop) {
    throw new Error("start must be smaller than stop");
  }

  const results = [];

  for (let i = start; i <= stop; i++) {
    results.push(i);
  }

  return results;
}
