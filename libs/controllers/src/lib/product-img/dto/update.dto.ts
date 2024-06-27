import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateProductImgDto {
  @Property({ type: 'string', minLength: 3, maxLength: 100 }) title: string;
}
