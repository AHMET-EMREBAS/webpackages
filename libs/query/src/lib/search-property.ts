import { UnprocessableEntityException, applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { ILike } from 'typeorm';
import { isArray } from 'class-validator';
import { ID } from '@webpackages/types';
import { Property } from '@webpackages/property';

export function SearchProperty<T extends ID>(searchables: (keyof T)[]) {
  return applyDecorators(
    Property({ type: 'string', noValidate: true, example: '' }),
    Transform(({ value }) => {
      if (typeof value === 'string' && value.length > 0) {
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
