import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateCustomerEmailDto {
  @Property({ type: 'string', format: 'email' }) email: string;
}
