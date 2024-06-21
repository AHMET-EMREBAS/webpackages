import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateClockDto {
  @Property({ type: 'date', required: true, update: false })
  starDate: Date;

  @Property({ type: 'date' })
  endDate: Date;

  @Property({ type: 'number', required: true })
  undefined: IDDto;
}
