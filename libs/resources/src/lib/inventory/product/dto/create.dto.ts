import { IDDto, ObjectIdProperty, Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateProductDto {
  @Property({ type: 'string', required: true }) name: string;
  @Property({ type: 'string', required: true }) upc: string;
  @Property({ type: 'string' }) description: string;
  @Property({ type: 'string' }) brand: string;

  @ObjectIdProperty() supplier: IDDto;
  @ObjectIdProperty() category: IDDto;
}
