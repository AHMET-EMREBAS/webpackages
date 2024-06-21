import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Project } from './project.entity';
import { ProjectMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Project>(ds, Project, ProjectMetadata);
  },
})
export class ProjectView extends BaseView {
  @ViewColumn() name: string;
}
