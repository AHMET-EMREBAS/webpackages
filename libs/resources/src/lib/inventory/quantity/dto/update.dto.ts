import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/core';

@Exclude()
export class UpdateQuantityDto {
  @Property({ type: 'number', required: true, minimum: 0 }) quantity: number;
}
