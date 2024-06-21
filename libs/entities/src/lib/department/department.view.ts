import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Department } from './department.entity';
import { DepartmentMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Department>(ds, Department, DepartmentMetadata);
  },
})
export class DepartmentView extends BaseView {
  @ViewColumn() name: string;
}
