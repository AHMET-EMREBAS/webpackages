import { IStore } from '@webpackages/models';

export function getBuiltinStores(): Partial<IStore>[] {
  return [
    { id: 1, name: 'Chigago, IL 60645' },
    { id: 2, name: 'San Francisco, CA 94117' },
  ];
}
