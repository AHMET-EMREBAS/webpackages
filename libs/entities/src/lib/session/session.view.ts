import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Session } from './session.entity';
import { SessionMetadata } from '@webpackages/metadata';

import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Session>(ds, Session, SessionMetadata);
  },
})
export class SessionView extends BaseView {
  @ViewColumn() userId: User['id'];
  @ViewColumn() userActive: User['active'];
}
