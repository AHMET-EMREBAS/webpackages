import { BaseEntityService } from '@webpackages/core';
import { ProductImg } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductImgService extends BaseEntityService<ProductImg> {
  constructor(@InjectRepository(ProductImg) repo: Repository<ProductImg>) {
    super(repo);
  }
}
