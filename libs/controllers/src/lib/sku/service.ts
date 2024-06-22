import { BaseEntityService } from '@webpackages/database';
import { Sku, SkuView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SkuService extends BaseEntityService<Sku, SkuView> {
  constructor(
    @InjectRepository(Sku) repo: Repository<Sku>,
    @InjectRepository(SkuView) view: Repository<SkuView>
  ) {
    super(repo, view);
  }
}
