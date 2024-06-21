import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Category } from './category.entity';
import { CategoryMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Category>(ds, Category, CategoryMetadata);
  },
})
export class CategoryView extends BaseView {
  @ViewColumn() name: string;
}
