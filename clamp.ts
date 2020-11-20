export function clamp(min: number, max: number, value: number): number {
  return value < min ? min : value > max ? max : value;
}
