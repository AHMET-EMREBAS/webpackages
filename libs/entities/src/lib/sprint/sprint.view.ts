import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Sprint } from './sprint.entity';
import { SprintMetadata } from '@webpackages/metadata';

import { Project } from '../project';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Sprint>(ds, Sprint, SprintMetadata);
  },
})
export class SprintView extends BaseView {
  @ViewColumn() name: string;
  @ViewColumn() description: string;

  @ViewColumn() projectName: Project['name'];
  @ViewColumn() projectId: Project['id'];
  @ViewColumn() projectActive: Project['active'];
}
