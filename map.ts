export function map<T, U>(fn: (x: T)=> U, list: T[]): U[] {
    return list.map(fn)
}