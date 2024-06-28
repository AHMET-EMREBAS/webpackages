import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCustomerEmailDto {
  @Property({ type: 'string', format: 'email', required: true }) email: string;

  @Property({ type: 'object', target: IDDto, required: true })
  customer: IDDto;
}
