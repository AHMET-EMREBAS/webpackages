import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateClockDto {
  @Property({ type: 'date', example: '6/26/2024' }) endDate: Date;
}
