import { BaseEntityService } from '@webpackages/database';
import { SkuDetail, SkuDetailView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SkuDetailService extends BaseEntityService<
  SkuDetail,
  SkuDetailView
> {
  constructor(
    @InjectRepository(SkuDetail) repo: Repository<SkuDetail>,
    @InjectRepository(SkuDetailView) view: Repository<SkuDetailView>
  ) {
    super(repo, view);
  }
}
