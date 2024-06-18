import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Img } from '../entities';

@Exclude()
export class QueryImgDto extends BaseQueryDto implements QueryDto<Img> {
  @QueryProperty() name: string;
  @QueryProperty() url!: string;
}
