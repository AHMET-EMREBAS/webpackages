import { BaseEntityService } from '@webpackages/database';
import { SkuDetail } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SkuDetailService extends BaseEntityService<SkuDetail> {
  constructor(@InjectRepository(SkuDetail) repo: Repository<SkuDetail>) {
    super(repo);
  }
}
