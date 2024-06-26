import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdatePhoneDto {
  @Property({ type: 'string', format: 'phone' }) phone: string;
}
