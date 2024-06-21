import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCartDto {
  @Property({ type: 'boolean' })
  complete: boolean;
}
