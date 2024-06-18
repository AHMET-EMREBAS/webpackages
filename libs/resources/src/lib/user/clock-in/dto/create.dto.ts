import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateClockInDto {
  @Property({ type: 'number' }) userId: number;
}
