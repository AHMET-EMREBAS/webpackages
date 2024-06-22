import { BaseEntityService } from '@webpackages/database';
import { Store, StoreView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreService extends BaseEntityService<Store, StoreView> {
  constructor(
    @InjectRepository(Store) repo: Repository<Store>,
    @InjectRepository(StoreView) view: Repository<StoreView>
  ) {
    super(repo, view);
  }
}
