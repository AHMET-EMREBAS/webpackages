import { BaseEntityService } from '@webpackages/core';
import { Supplier } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupplierService extends BaseEntityService<Supplier> {
  constructor(@InjectRepository(Supplier) repo: Repository<Supplier>) {
    super(repo);
  }
}
