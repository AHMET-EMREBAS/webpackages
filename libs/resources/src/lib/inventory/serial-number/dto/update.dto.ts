import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/core';

@Exclude()
export class UpdateSerialNumberDto {
  @Property({ type: 'boolean' }) inStock: boolean;
}
