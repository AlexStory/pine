/**
 * Gets the given `key` from the `map`. Throws an error if it is not found
 * @param {K} key 
 * @param {Map<K, V>} map
 * @returns {V} 
 */
export function mapGet<K, V>(key: K, map: Map<K, V>): V {
  const res = map.get(key);
  if (res) {
    return res;
  } else {
    throw new Error("map has no key: " + key);
  }
}
