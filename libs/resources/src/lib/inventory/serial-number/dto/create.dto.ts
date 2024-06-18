import { IDDto, ObjectIdProperty, Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSerialNumberDto {
  @Property({ type: 'string', required: true }) serialNumber: string;
  @Property({ type: 'boolean' }) inStock: boolean;
  @ObjectIdProperty() product: IDDto;
}
