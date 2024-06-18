import { SearchDto, SearchProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Img } from '../entities';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchImgDto implements SearchDto<Img> {
  @SearchProperty<Img>(['name'])
  search: FindOptionsWhere<Img>;
}
