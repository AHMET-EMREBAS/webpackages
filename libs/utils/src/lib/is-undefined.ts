export function isUndefined<T>(
  value: T | undefined | null | typeof NaN
): value is T {
  return value == undefined;
}

export function isNotUndefined<T>(
  value: T | undefined | null | number
): value is T {
  return value != undefined;
}
