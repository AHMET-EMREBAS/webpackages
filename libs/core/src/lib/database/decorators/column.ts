import { Column as Col } from 'typeorm';
import { Property, PropertyType } from '../../property';
import { Type, applyDecorators } from '@nestjs/common';
import { hash } from '../../auth/hash';

export type ColumnOptions = {
  type: PropertyType;
  required?: boolean;
  unique?: boolean;
  update?: boolean;
  defaultValue?: unknown;
  target?: Type;
};

export function StringColumn(options: ColumnOptions) {
  return applyDecorators(
    Property({ ...options, type: 'string', example: 'example value' }),
    Col({
      type: 'varchar',
      nullable: options.required != true,
      unique: options.unique,
      update: options.update,
      default: options.defaultValue,
    })
  );
}

export function NumberColumn(options: ColumnOptions) {
  return applyDecorators(
    Property({ ...options, type: 'number', example: 100 }),
    Col({
      type: 'numeric',
      nullable: options.required != true,
      unique: options.unique,
      update: options.update,
      default: options.defaultValue,
    })
  );
}

export function DateColumn(options: ColumnOptions) {
  return applyDecorators(
    Property({ ...options, type: 'date', example: '10-10-2025' }),
    Col({
      type: 'timestamptz',
      nullable: options.required != true,
      unique: options.unique,
      update: options.update,
      default: options.defaultValue,
    })
  );
}

export function BooleanColumn(options: ColumnOptions) {
  return applyDecorators(
    Property({ type: 'boolean', example: true }),
    Col({
      type: 'boolean',
      nullable: true,
      update: options.update,
      default: options.defaultValue,
    })
  );
}

export function ObjectColumn(options: ColumnOptions) {
  if (!options.target) {
    throw new Error('Object Column Target is required!');
  }
  return applyDecorators(
    Property({
      type: 'object',
      target: options.target,
      example: { key: 'value' },
    }),
    Col({
      type: 'varchar',
      nullable: true,
      transformer: {
        to(value) {
          if (typeof value === 'object') {
            return JSON.stringify(value);
          }
          return value;
        },
        from(value) {
          if (typeof value === 'string') {
            return JSON.parse(value);
          }
          return value;
        },
      },
      update: options.update,
      default: options.defaultValue,
    })
  );
}

export function Column(options: ColumnOptions) {
  if (options.type === 'string') {
    return StringColumn(options);
  } else if (options.type === 'number') {
    return NumberColumn(options);
  } else if (options.type === 'boolean') {
    return BooleanColumn(options);
  } else if (options.type === 'date') {
    return DateColumn(options);
  } else if (options.type === 'object') {
    return ObjectColumn(options);
  }

  throw new Error(`Column type ${options.type} is unkown!`);
}

export function PasswordColumn() {
  return Col({
    type: 'varchar',
    transformer: {
      to(value) {
        return hash(value);
      },
      from(value) {
        return value;
      },
    },
  });
}
