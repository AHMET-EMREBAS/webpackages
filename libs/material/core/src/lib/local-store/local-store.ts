/* eslint-disable @typescript-eslint/no-explicit-any */
import { isUndefined, isNotUndefined } from '@webpackages/utils';

export class LocalStoreController<T> {
  private readonly stores = new Map<string, LocalStoreController<any>>();
  constructor(protected readonly storeName: string) {}

  createSubStore<T>(name: string, variant = ''): string {
    const subStoreName = `${this.storeName}_${name}${variant}`;
    const subStore = new LocalStoreController<T>(subStoreName);
    this.stores.set(subStoreName, subStore);

    return subStoreName;
  }

  getSubStore<T>(name: string): LocalStoreController<T> {
    return this.stores.get(name);
  }

  get(): T | undefined {
    const raw = localStorage.getItem(this.storeName);
    if (isNotUndefined(raw)) return JSON.parse(raw);
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
    if (isUndefined(foundItem)) this.set(value);
  }

  delete() {
    localStorage.removeItem(this.storeName);
  }
}
