import { BaseEntityService } from '@webpackages/database';
import { PurchaseOrder } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchaseOrderService extends BaseEntityService<PurchaseOrder> {
  constructor(
    @InjectRepository(PurchaseOrder) repo: Repository<PurchaseOrder>
  ) {
    super(repo);
  }
}
