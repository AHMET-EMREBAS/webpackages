import { Column as Col } from 'typeorm';
import { Property, PropertyType } from '../../property';
import { Type, applyDecorators } from '@nestjs/common';

export type ColumnOptions = {
  type: PropertyType;
  required?: boolean;
  unique?: boolean;
};

export function StringColumn(options: ColumnOptions) {
  return applyDecorators(
    Property({ ...options, type: 'string' }),
    Col({
      type: 'varchar',
      nullable: options.required != true,
      unique: options.unique,
    })
  );
}

export function NumberColumn(options: ColumnOptions) {
  return applyDecorators(
    Property({ ...options, type: 'number' }),
    Col({
      type: 'numeric',
      nullable: options.required != true,
      unique: options.unique,
    })
  );
}

export function DateColumn(options: ColumnOptions) {
  return applyDecorators(
    Property({ ...options, type: 'date' }),
    Col({
      type: 'varchar',
      nullable: options.required != true,
      unique: options.unique,
    })
  );
}

export function BooleanColumn() {
  return applyDecorators(
    Property({ type: 'boolean' }),
    Col({ type: 'boolean', nullable: true })
  );
}

export function ObjectColumn(target: Type = class ObjectClass {}) {
  return applyDecorators(
    Property({ type: 'object', target }),
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
    })
  );
}

export function Column(options: ColumnOptions) {
  if (options.type === 'string') {
    return StringColumn(options);
  } else if (options.type === 'number') {
    return NumberColumn(options);
  } else if (options.type === 'boolean') {
    return BooleanColumn();
  } else if (options.type === 'date') {
    return DateColumn(options);
  } else if (options.type === 'object') {
    return ObjectColumn();
  }

  throw new Error(`Column type ${options.type} is unkown!`);
}
