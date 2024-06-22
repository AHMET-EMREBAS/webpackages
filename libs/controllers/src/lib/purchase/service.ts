import { BaseEntityService } from '@webpackages/database';
import { Purchase, PurchaseView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchaseService extends BaseEntityService<Purchase, PurchaseView> {
  constructor(
    @InjectRepository(Purchase) repo: Repository<Purchase>,
    @InjectRepository(PurchaseView) view: Repository<PurchaseView>
  ) {
    super(repo, view);
  }
}
