import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateAddressDto {
  @Property({ type: 'string', required: true, maxLength: 100 }) street: string;
  @Property({ type: 'string', required: true, maxLength: 100 }) city: string;
  @Property({ type: 'string', required: true, maxLength: 100 }) state: string;
  @Property({ type: 'string', required: true, maxLength: 100 }) country: string;
  @Property({ type: 'string', required: true, maxLength: 100 }) zip: string;
}
