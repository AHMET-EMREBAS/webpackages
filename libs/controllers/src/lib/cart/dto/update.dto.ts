import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateCartDto {
  @Property({ type: 'boolean', example: false }) complete: boolean;
}
