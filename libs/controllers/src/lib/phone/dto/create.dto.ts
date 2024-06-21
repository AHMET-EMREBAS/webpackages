import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreatePhoneDto {
  @Property({ type: 'string', format: 'phone', required: true })
  phone: string;
}
