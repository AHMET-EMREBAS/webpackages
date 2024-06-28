import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateClockDto {
  @Property({
    type: 'date',
    required: true,
    update: false,
    example: '6/28/2024',
  })
  starDate: Date;
  @Property({ type: 'date', example: '6/28/2024' }) endDate: Date;

  @Property({ type: 'object', target: IDDto, required: true })
  employee: IDDto;
}
