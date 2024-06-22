import { BaseEntityService } from '@webpackages/database';
import { ProductImg, ProductImgView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductImgService extends BaseEntityService<
  ProductImg,
  ProductImgView
> {
  constructor(
    @InjectRepository(ProductImg) repo: Repository<ProductImg>,
    @InjectRepository(ProductImgView) view: Repository<ProductImgView>
  ) {
    super(repo, view);
  }
}
