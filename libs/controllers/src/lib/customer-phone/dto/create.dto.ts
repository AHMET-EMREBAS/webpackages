import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCustomerPhoneDto {
  @Property({ type: 'string', format: 'phone', required: true }) phone: string;

  @Property({ type: 'object', target: IDDto, required: true })
  customer: IDDto;
}
