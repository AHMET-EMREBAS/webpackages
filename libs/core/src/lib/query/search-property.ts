import { applyDecorators } from '@nestjs/common';
import { Property } from '../property';
import { Transform } from 'class-transformer';
import { IDEntity } from '../database';
import { ILike } from 'typeorm';
import { isArray } from 'class-validator';

export function SearchProperty<T extends IDEntity>(searchables: (keyof T)[]) {
  return applyDecorators(
    Property({ type: 'string', maxLength: 100 }),
    Transform(({ value }) => {
      if (typeof value === 'string') {
        return searchables
          .map((e) => {
            return { [e]: ILike(`%${value}%`) };
          })
          .reduce((p, c) => ({ ...p, ...c }));
      } else if (isArray(value)) {
        return value
          .map((v) => {
            return searchables.map((e) => ({
              [e]: ILike(`${v}`),
            }));
          })
          .flat();
      }
      return undefined;
    })
  );
}
