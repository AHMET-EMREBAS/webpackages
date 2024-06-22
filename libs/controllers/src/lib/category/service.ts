import { BaseEntityService } from '@webpackages/database';
import { Category, CategoryView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService extends BaseEntityService<Category, CategoryView> {
  constructor(
    @InjectRepository(Category) repo: Repository<Category>,
    @InjectRepository(CategoryView) view: Repository<CategoryView>
  ) {
    super(repo, view);
  }
}
