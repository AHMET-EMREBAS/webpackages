import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateClockDto {
  @Property({
    type: 'date',
    required: true,
    update: false,
    example: '6/26/2024',
  })
  starDate: Date;
  @Property({ type: 'date', example: '6/26/2024' }) endDate: Date;

  @Property({ type: 'number', required: true })
  user: IDDto;
}
