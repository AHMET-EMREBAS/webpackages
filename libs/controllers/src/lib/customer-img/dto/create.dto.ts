import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCustomerImgDto {
  @Property({ type: 'string', minLength: 3, maxLength: 100 })
  title: string;

  @Property({ type: 'string', update: false })
  generatedName: string;
}
