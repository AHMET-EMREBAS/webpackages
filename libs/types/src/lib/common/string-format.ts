import { Arr } from './arr';

export type StringFormat =
  | 'name'
  | 'email'
  | 'password'
  | 'barcode'
  | 'phone'
  | 'short'
  | 'long'
  | 'uuid'
  | 'ean'
  | 'credit-card'
  | 'ssn'
  | 'ip4'
  | 'ip6'
  | 'url'
  | 'data-uri'
  | 'token';

export const StringFormats: Arr<StringFormat> = [
  'name',
  'email',
  'password',
  'barcode',
  'phone',
  'short',
  'long',
  'uuid',
  'ean',
  'credit-card',
  'ssn',
  'ip4',
  'ip6',
  'url',
  'data-uri',
];
