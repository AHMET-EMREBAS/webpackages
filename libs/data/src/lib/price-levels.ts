import { IPriceLevel } from '@webpackages/models';

export function getBuiltinPriceLevels(): Partial<IPriceLevel>[] {
  return [
    { id: 1, name: 'Chicago Wholesale', currency: 'USD', taxrate: 0 },
    { id: 2, name: 'Chicago Retail', currency: 'USD', taxrate: 10.25 },
  ];
}
