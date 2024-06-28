import { isUndefined, isNotUndefined } from '@webpackages/utils';

export class LocalStoreController<T> {
  constructor(protected readonly storeName: string) {}

  get(): T | undefined {
    const raw = localStorage.getItem(this.storeName);
    if (isNotUndefined(raw)) {
      return JSON.parse(raw);
    }
    console.error(`Could not get the ${this.storeName} store!`);
    return undefined;
  }

  getOrThrow(): T {
    const foundItem = this.get();
    if (isNotUndefined(foundItem)) return foundItem;

    throw new Error(`Could not get the ${this.storeName} store!`);
  }

  set(value: T) {
    localStorage.setItem(this.storeName, JSON.stringify(value));
  }

  setIfNotExist(value: T) {
    const foundItem = this.get();
    if (isUndefined(foundItem)) {
      this.set(value);
    }
  }
}
