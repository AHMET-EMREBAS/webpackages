import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSkuDetailDto {
  @Property({ type: 'string', required: true, maxLength: 100 }) key: string;
  @Property({ type: 'string', required: true, maxLength: 100 }) value: string;
}
