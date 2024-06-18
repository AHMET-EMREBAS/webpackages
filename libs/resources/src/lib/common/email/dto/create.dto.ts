import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateEmailDto {
  @Property({ type: 'string', required: true, unique: true, format: 'email' })
  email: string;
}
