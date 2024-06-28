import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCartDto {
  @Property({ type: 'boolean', example: false }) complete: boolean;

  @Property({ type: 'object', target: IDDto, required: true })
  customer: IDDto;

  @Property({ type: 'object', target: IDDto, required: true })
  employee: IDDto;
}
