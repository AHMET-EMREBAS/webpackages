import { UnprocessableEntityException, applyDecorators } from '@nestjs/common';
import { Property } from '../property';
import { Transform } from 'class-transformer';
import { IDEntity } from '../database';
import { ILike } from 'typeorm';
import { isArray } from 'class-validator';

export function SearchProperty<T extends IDEntity>(searchables: (keyof T)[]) {
  return applyDecorators(
    Property({ type: 'string', noValidate: true }),
    Transform(({ value }) => {
      if (typeof value === 'string') {
        if (value.length > 100) {
          throw new UnprocessableEntityException(
            'Search must be shorter than 100 characters!'
          );
        }
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
