import { Exclude } from 'class-transformer';
import { QueryAddressDto } from '../../../common';
import { QueryProperty } from '@webpackages/core';

@Exclude()
export class QueryUserAddressDto extends QueryAddressDto {
  @QueryProperty() user: string;
}
