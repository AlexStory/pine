/**
 * Returns wether a map has the given key
 * @param {K} key 
 * @param {Map<K, V>} map
 * @returns {boolean} 
 */
export function mapHas<K, V>(key: K, map: Map<K, V>): boolean {
  return map.has(key);
}
