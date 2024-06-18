import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateProfileDto {
  @Property({ type: 'string', required: true }) firstName: string;
  @Property({ type: 'string', required: true }) middleName: string;
  @Property({ type: 'string' }) lastName: string;
  @Property({ type: 'string', required: true }) occupation: string;
  @Property({ type: 'string' }) profileImg: string;
}
