import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateUserEmailDto {
  @Property({ type: 'string', format: 'email', required: true })
  email: string;

  @Property({ type: 'number', required: true })
  undefined: IDDto;
}
