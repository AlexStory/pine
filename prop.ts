/**
 * Returns the property from the given object
 * @param {string} prop 
 * @param {object} obj 
 * 
 */
export function prop(prop: string, obj: Record<string, unknown>): unknown {
  return obj[prop];
}
