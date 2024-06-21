import { BaseEntityService } from '@webpackages/database';
import { Supplier } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupplierService extends BaseEntityService<Supplier> {
  constructor(@InjectRepository(Supplier) repo: Repository<Supplier>) {
    super(repo);
  }
}
