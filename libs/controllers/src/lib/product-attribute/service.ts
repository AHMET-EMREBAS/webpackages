import { BaseEntityService } from '@webpackages/database';
import { ProductAttribute, ProductAttributeView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductAttributeService extends BaseEntityService<
  ProductAttribute,
  ProductAttributeView
> {
  constructor(
    @InjectRepository(ProductAttribute) repo: Repository<ProductAttribute>,
    @InjectRepository(ProductAttributeView)
    view: Repository<ProductAttributeView>
  ) {
    super(repo, view);
  }
}
