import { Arr } from './arr';

export type PropertyType = 'string' | 'number' | 'boolean' | 'date' | 'object';

export const PropertyTypes: Arr<PropertyType> = [
  'string',
  'number',
  'boolean',
  'date',
  'object',
];

export type RelationType = 'one' | 'many' | 'owner' | 'secure-owner';
