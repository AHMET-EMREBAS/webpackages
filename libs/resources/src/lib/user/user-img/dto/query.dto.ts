import { Exclude } from 'class-transformer';
import { QueryImgDto } from '../../../common';
import { QueryProperty } from '@webpackages/core';

@Exclude()
export class QueryUserImgDto extends QueryImgDto {
  @QueryProperty() user: string;
}
