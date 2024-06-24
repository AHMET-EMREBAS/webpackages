import { isNotUndefined } from './is-undefined';

export type UniqueOptions<T> = {
  uniqueKey?: keyof T;
  excludeUndefiend?: boolean;
};
export function unique<T>(items: T[], options?: UniqueOptions<T>): T[] {
  const uniqueKey = options?.uniqueKey;
  if (isNotUndefined(uniqueKey)) {
    const keyAcumulator: unknown[] = [];
    const raw = items.filter((m) => {
      if (isNotUndefined(m)) {
        const isInAccumulator = keyAcumulator.includes(m[uniqueKey]);
        keyAcumulator.push(m[uniqueKey]);
        return !isInAccumulator;
      }
      return false;
    });
    return [...raw];
  } else {
    return [...new Set(items)];
  }
}
