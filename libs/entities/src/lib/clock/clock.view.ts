import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Clock } from './clock.entity';
import { ClockMetadata } from '@webpackages/metadata';

import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Clock>(ds, Clock, ClockMetadata);
  },
})
export class ClockView extends BaseView {
  @ViewColumn() starDate: Date;
  @ViewColumn() endDate: Date;

  @ViewColumn() userId: User['id'];
  @ViewColumn() userActive: User['active'];
}
