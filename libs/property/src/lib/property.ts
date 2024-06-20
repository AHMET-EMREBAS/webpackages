import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { applyDecorators } from '@nestjs/common';
import { Validate, ValidateOptions } from '@webpackages/class-validator';
import { exampleValue } from './example-value';

export function Property(
  options: Omit<ApiPropertyOptions, 'type' | 'format'> &
    Partial<ValidateOptions> &
    Pick<ValidateOptions, 'type'>
) {
  const type = options.type;
  const format = options.format;
  const required = !!options.required;
  const nullable = !required;

  const decorators: PropertyDecorator[] = [
    Expose(),
    ApiProperty({
      example: exampleValue(type, format),
      ...options,
      required,
      nullable,
      type: type === 'date' ? 'string' : type,
    }),
    Validate(options),
  ];

  return applyDecorators(...decorators);
}
