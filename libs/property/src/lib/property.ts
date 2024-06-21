import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { applyDecorators } from '@nestjs/common';
import { Validate } from '@webpackages/validation';
import { exampleValue } from './example-value';
import { ApiPropertyOptions } from '@webpackages/types';

export function Property(options: ApiPropertyOptions) {
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
