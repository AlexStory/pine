/**
 * Sets a key to a value on a Map
 * @param {K} key 
 * @param {V} value 
 * @param {Map<K, V>} map
 * @returns {Map<K, V>} 
 */
export function mapSet<K, V>(key: K, value: V, map: Map<K, V>): Map<K, V> {
  const newMap = new Map(map);
  newMap.set(key, value);
  return newMap;
}
