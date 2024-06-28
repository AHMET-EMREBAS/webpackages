import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateUserPhoneDto {
  @Property({ type: 'string', format: 'phone', required: true }) phone: string;
}
