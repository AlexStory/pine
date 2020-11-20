/**
 * Sets a number to be bounded between a min and a max.
 * @param {number} min 
 * @param {number} max 
 * @param {number} value
 * @returns  {number} 
 */
export function clamp(min: number, max: number, value: number): number {
  return value < min ? min : value > max ? max : value;
}
