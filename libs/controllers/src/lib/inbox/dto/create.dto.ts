import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateInboxDto {
  @Property({ type: 'number', required: true })
  undefined: IDDto;

  @Property({ type: 'object', target: IDDto, isArray: true })
  undefined: IDDto[];

  @Property({ type: 'object', target: IDDto, isArray: true })
  undefined: IDDto[];
}
