import { error } from '../dev';
import { isUndefined, isNotUndefined } from '@webpackages/utils';

export class LocalStoreRegistry {
  protected static map = new Map<string, string>();
  protected static localStore: Storage = localStorage;

  private constructor() {
    // Singleton
  }

  static register(uniqueName: string) {
    if (this.map.has(uniqueName)) {
      throw new Error(`Local store is already registered!`);
    }
    this.map.set(uniqueName, uniqueName);
    return this;
  }
}

export class LocalStoreController<T> {
  private constructor(protected readonly storeName: string) {
    LocalStoreRegistry.register(storeName);
  }

  get(): T | undefined {
    const raw = localStorage.getItem(this.storeName);
    if (raw) {
      return JSON.parse(raw);
    }
    error(`Could not get the ${this.storeName} store!`);
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

  static create<T>(storeName: string): LocalStoreController<T> {
    return new LocalStoreController<T>(storeName);
  }
}
