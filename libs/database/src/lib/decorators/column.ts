/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column as Col } from 'typeorm';
import { applyDecorators } from '@nestjs/common';
import { ColumnOptions } from '@webpackages/types';
import { Property } from '@webpackages/property';
import { hash } from '@webpackages/hash';

export function StringColumn(options: Partial<ColumnOptions>) {
  return applyDecorators(
    Property({
      ...options,
      type: 'string',
      example: options.example || 'example value',
    }),
    Col({
      type: 'varchar',
      nullable: options.required != true,
      unique: options.unique,
      update: options.update,
      default: options.default,
    })
  );
}

export function NumberColumn(options: Partial<ColumnOptions>) {
  return applyDecorators(
    Property({ ...options, type: 'number', example: options.example || 100 }),
    Col({
      type: 'varchar',
      nullable: options.required != true,
      unique: options.unique,
      update: options.update,
      default: options.default,
      transformer: {
        from(value) {
          return parseFloat(value);
        },
        to(value) {
          return value;
        },
      },
    })
  );
}

export function DateColumn(options: Partial<ColumnOptions>) {
  return applyDecorators(
    Property({
      ...options,
      type: 'date',
      example: options.example || '10-10-2025',
    }),
    Col({
      type: 'varchar',
      nullable: options.required != true,
      unique: options.unique,
      update: options.update,
      default: options.default,
    })
  );
}

export function BooleanColumn(options: Partial<ColumnOptions>) {
  return applyDecorators(
    Property({ type: 'boolean', example: options.example || true }),
    Col({
      type: 'boolean',
      nullable: true,
      update: options.update,
      default: options.default,
    })
  );
}

export function ObjectColumn(options: Partial<ColumnOptions>) {
  if (!options.target) {
    console.warn(`column option target is not provided`);
    options.target = class UnkownTarget {};
  }
  return applyDecorators(
    Property({
      type: 'object',
      target: options.target,
      example: options.example || { key: 'value' },
    }),
    Col({
      type: 'varchar',
      nullable: true,
      transformer: {
        to(value) {
          if (value != undefined) {
            return JSON.stringify(value);
          }
          return value;
        },
        from(value) {
          return value;
        },
      },
      update: options.update,
      default: options.default,
    })
  );
}

export function Column(options: Partial<ColumnOptions>) {
  if (options.type === 'string') {
    if (options.format === 'password') {
      return PasswordColumn();
    }
    return StringColumn(options);
  } else if (options.type === 'number') {
    return NumberColumn(options);
  } else if (options.type === 'boolean') {
    return BooleanColumn(options);
  } else if (options.type === 'date') {
    return DateColumn(options);
  } else if (options.type === 'object' || options.isArray === true) {
    return ObjectColumn(options);
  }

  throw new Error(`Column type ${options.type} is unkown!`);
}

export function PasswordColumn() {
  return applyDecorators(
    Property({ type: 'string', format: 'password', example: 'password' }),
    Col({
      type: 'varchar',
      transformer: {
        to(value) {
          return hash(value);
        },
        from(value) {
          return value;
        },
      },
    })
  );
}
