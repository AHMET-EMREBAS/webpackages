import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSessionDto {
  @Property({ type: 'string', required: true, minLength: 10 })
  deviceId: string;
}

