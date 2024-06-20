import { FindOptionsWhere } from 'typeorm';

export type SearchDto<T> = {
  search: FindOptionsWhere<T>;
};
