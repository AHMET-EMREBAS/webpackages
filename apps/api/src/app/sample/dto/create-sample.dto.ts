import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSampleDto {
  @Property({ type: 'string', minLength: 3, required: true, unique: true })
  name: string;

  @Property({ type: 'date', required: true })
  dob: Date;
}
