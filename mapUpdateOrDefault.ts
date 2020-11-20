import { mapGet } from "./mapGet.ts";
import { mapHas, mapSet } from "./mod.ts";

/**
 * Updates an existing value, or sets it to default for the given `key` in map
 * @param {K} key 
 * @param {V} def 
 * @param {(V) => V} update 
 * @param {Map<K, V>} map
 * @returns {Map<K, V>} 
 */
export function mapUpdateOrDefault<K, V>(
  key: K,
  def: V,
  update: (val: V) => V,
  map: Map<K, V>,
): Map<K, V> {
  const newMap = new Map(map);
  if (mapHas(key, map)) {
    return mapSet(key, update(mapGet(key, map)), map);
  } else {
    return mapSet(key, def, map);
  }
}
