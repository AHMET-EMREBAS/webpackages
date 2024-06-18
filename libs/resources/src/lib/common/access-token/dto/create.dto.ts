import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateAccessTokenDto {
  @Property({ type: 'string', minLength: 3, maxLength: 100 })
  name: string;

  @Property({ type: 'string', minLength: 10 })
  token: string;
}
