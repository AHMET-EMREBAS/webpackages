import { ISupplier } from '@webpackages/models';

export function getBuiltinSuppliers(): Partial<ISupplier>[] {
  return [
    { id: 1, name: 'Amazon' },
    { id: 2, name: 'Ebay' },
    { id: 3, name: 'Etcy' },
    { id: 4, name: 'Alibaba' },
    { id: 5, name: 'Office Depot' },
    { id: 6, name: 'Home Depot' },
    { id: 7, name: 'Wallmart' },
  ];
}
