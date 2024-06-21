import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateEmailDto {
  @Property({ type: 'string', format: 'email', required: true })
  email: string;
}
