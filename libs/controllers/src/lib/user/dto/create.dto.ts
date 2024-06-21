import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateUserDto {
  @Property({ type: 'string', minLength: 3, required: true, unique: true })
  name: string;
}
