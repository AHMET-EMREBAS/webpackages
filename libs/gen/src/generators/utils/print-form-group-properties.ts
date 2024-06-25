import { Metadata } from '@webpackages/types';
import { printInputValiators } from './print-input-validators';

export function printFormGroupProperties(metadata: Metadata) {
  const properties = Object.entries(
    { ...(metadata.properties || {}), ...(metadata.relations || {}) } || {}
  )
    ?.map(([key, value]) => {
      return `${key}:[null, ${printInputValiators(value)} ]`;
    })
    .join(',');
  return `${properties}`;
}
