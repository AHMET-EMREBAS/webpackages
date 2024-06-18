import { IDDto, ObjectIdProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateCartDto {
  @ObjectIdProperty({ isArray: true }) orders: IDDto[];
}
