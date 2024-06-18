import { IDDto, ObjectIdProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCartDto {
  @ObjectIdProperty() user: IDDto;
  @ObjectIdProperty() customer: IDDto;
}
