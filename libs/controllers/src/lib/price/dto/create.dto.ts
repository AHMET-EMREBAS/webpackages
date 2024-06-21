import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreatePriceDto {
  @Property({ type: 'number', required: true, minimum: 0, moreThan: 'cost' })
  price: number;

  @Property({ type: 'number', required: true, minimum: 0 })
  cost: number;

  @Property({ type: 'date', required: true })
  startDate: Date;

  @Property({ type: 'date', required: true, moreThan: 'startDate' })
  endDate: Date;

  @Property({ type: 'number', required: true })
  undefined: IDDto;

  @Property({ type: 'number', required: true })
  undefined: IDDto;
}
