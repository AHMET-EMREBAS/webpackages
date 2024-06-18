import { IDDto, ObjectIdProperty, Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateQuantityDto {
  @Property({ type: 'number', int: true, minimum: 0 }) quantity: number;
  @ObjectIdProperty() sku: IDDto;
  @ObjectIdProperty() store: IDDto;
}
