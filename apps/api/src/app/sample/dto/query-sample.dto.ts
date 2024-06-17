import { QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySampleDto {
  @QueryProperty() name!: string;
}
