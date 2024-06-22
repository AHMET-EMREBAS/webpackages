import { BaseEntityService } from '@webpackages/database';
import { Supplier, SupplierView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupplierService extends BaseEntityService<Supplier, SupplierView> {
  constructor(
    @InjectRepository(Supplier) repo: Repository<Supplier>,
    @InjectRepository(SupplierView) view: Repository<SupplierView>
  ) {
    super(repo, view);
  }
}
