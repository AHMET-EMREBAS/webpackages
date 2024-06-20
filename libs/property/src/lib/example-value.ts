import { PropertyType, StringFormat } from '@webpackages/types';

export function exampleValue(type: PropertyType, format?: StringFormat) {
  return type === 'string'
    ? format === 'email'
      ? 'user@mail.com'
      : format === 'barcode'
      ? '1245345123'
      : format === 'credit-card'
      ? '124589983334'
      : format === 'ip4'
      ? '192.169.0.12'
      : format === 'name'
      ? 'Sample'
      : format === 'ssn'
      ? '888-99-999'
      : format === 'phone'
      ? '+17739900000'
      : format === 'url'
      ? 'http:/domain.com'
      : ''
    : type === 'boolean'
    ? true
    : type === 'date'
    ? new Date().toLocaleDateString()
    : type === 'number'
    ? 1234
    : type === 'object'
    ? {}
    : undefined;
}
