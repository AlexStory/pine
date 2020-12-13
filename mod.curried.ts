import { curry } from "./curry.ts";
import { add as _add } from "./add.ts";
import { all as _all } from "./all.ts";
import { any as _any } from "./any.ts";
import { chunkEvery as _chunkEvery } from "./chunkEvery.ts";
import { clamp as _clamp } from "./clamp.ts";
import { comp as _comp } from "./comp.ts";
import { contains as _contains } from "./contains.ts";
import { eq as _eq } from "./eq.ts";
import { filter as _filter } from "./filter.ts";
import { fold as _fold } from "./fold.ts";
import { gt as _gt } from "./gt.ts";
import { gte as _gte } from "./gte.ts";
import { hasKey as _hasKey } from "./hasKey.ts";
import { indexMap as _indexMap } from "./indexMap.ts";
import { lt as _lt } from "./lt.ts";
import { lte as _lte } from "./lte.ts";
import { map as _map } from "./map.ts";
import { mapGet as _mapGet } from "./mapGet.ts";
import { mapHas as _mapHas } from "./mapHas.ts";
import { mapSet as _mapSet } from "./mapSet.ts";
import { mapUpdateOrDefault as _mapUpdateOrDefault } from "./mapUpdateOrDefault.ts";
import { max as _max } from "./max.ts";
import { maxBy as _maxBy } from "./maxBy.ts";
import { min as _min } from "./min.ts";
import { minBy as _minBy } from "./minBy.ts";
import { prop as _prop } from "./prop.ts";
import { range as _range } from "./range.ts";
import { reduce as _reduce } from "./reduce.ts";
import { repeat as _repeat } from "./repeat.ts";
import { scan as _scan } from "./scan.ts";
import { sumBy as _sumBy } from "./sumBy.ts";
import { take as _take } from "./take.ts";
import { takeLast as _takeLast } from "./takeLast.ts";
import { takeWhile as _takeWhile } from "./takeWhile.ts";
import { zip as _zip } from "./zip.ts";

const add = curry(_add);
const all = curry(_all);
const any = curry(_any);
const chunkEvery = curry(_chunkEvery);
const clamp = curry(_clamp);
const comp = curry(_comp);
const contains = curry(_contains);
const eq = curry(_eq);
const filter = curry(_filter);
const fold = curry(_fold);
const gt = curry(_gt);
const gte = curry(_gte);
const hasKey = curry(_hasKey);
const indexMap = curry(_indexMap);
const lt = curry(_lt);
const lte = curry(_lte);
const map = curry(_map);
const mapGet = curry(_mapGet);
const mapHas = curry(_mapHas);
const mapSet = curry(_mapSet);
const mapUpdateOrDefault = curry(_mapUpdateOrDefault);
const max = curry(_max);
const maxBy = curry(_maxBy);
const min = curry(_min);
const minBy = curry(_minBy);
const prop = curry(_prop);
const range = curry(_range);
const reduce = curry(_reduce);
const repeat = curry(_repeat);
const scan = curry(_scan);
const sumBy = curry(_sumBy);
const take = curry(_take);
const takeLast = curry(_takeLast);
const takeWhile = curry(_takeWhile);
const zip = curry(_zip);

export {
  add,
  all,
  any,
  chunkEvery,
  clamp,
  comp,
  contains,
  eq,
  filter,
  fold,
  gt,
  gte,
  hasKey,
  indexMap,
  lt,
  lte,
  map,
  mapGet,
  mapHas,
  mapSet,
  mapUpdateOrDefault,
  max,
  maxBy,
  min,
  minBy,
  prop,
  range,
  reduce,
  repeat,
  scan,
  sumBy,
  take,
  takeLast,
  takeWhile,
  zip,
};
