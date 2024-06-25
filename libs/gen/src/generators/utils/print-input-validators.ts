import { PropertyOptions } from '@webpackages/types';

export function printInputValiators(
  property: Partial<PropertyOptions>
): string {
  const result = [
    property.minLength && `Validators.minLength(${property.minLength})`,
    property.maxLength && `Validators.maxLength(${property.maxLength})`,
    property.minimum && `Validators.min(${property.minimum})`,
    property.maximum && `Validators.max(${property.minLength})`,
    property.format == 'email' && `Validators.email`,
    property.required && `Validators.required`,
  ]
    .filter((e) => e)
    .join(', ');

  return `[${result}]`;
}
