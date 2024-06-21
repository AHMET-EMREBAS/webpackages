import { BaseEntityService } from '@webpackages/database';
import { Product, ProductView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService extends BaseEntityService<Product> {
  constructor(
    @InjectRepository(Product) repo: Repository<Product>,
    @InjectRepository(ProductView) view: Repository<ProductView>
  ) {
    super(repo, view);
  }
}
