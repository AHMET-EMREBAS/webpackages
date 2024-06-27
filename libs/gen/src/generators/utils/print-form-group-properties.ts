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
export function printUpdateFormGroupProperties(metadata: Metadata) {
  const properties = Object.entries(
    { ...(metadata.properties || {}), ...(metadata.relations || {}) } || {}
  )
    .filter(([key, value]) => value.update != false)
    ?.map(([key, value]) => {
      return `${key}:[null, ${printInputValiators(value)} ]`;
    })
    .join(',');
  return `${properties}`;
}
