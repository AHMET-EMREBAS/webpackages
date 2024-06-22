import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCartDto {
  @Property({ type: 'boolean', example: false }) complete: boolean;

  @Property({ type: 'number', required: true })
  customer: IDDto;

  @Property({ type: 'number', required: true })
  user: IDDto;
}
