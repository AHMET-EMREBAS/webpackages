import { BaseEntityService } from '@webpackages/database';
import { PurchaseOrder, PurchaseOrderView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchaseOrderService extends BaseEntityService<
  PurchaseOrder,
  PurchaseOrderView
> {
  constructor(
    @InjectRepository(PurchaseOrder) repo: Repository<PurchaseOrder>,
    @InjectRepository(PurchaseOrderView) view: Repository<PurchaseOrderView>
  ) {
    super(repo, view);
  }
}
