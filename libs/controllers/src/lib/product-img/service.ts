import { BaseEntityService } from '@webpackages/database';
import { ProductImg } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductImgService extends BaseEntityService<ProductImg> {
  constructor(@InjectRepository(ProductImg) repo: Repository<ProductImg>) {
    super(repo);
  }
}
