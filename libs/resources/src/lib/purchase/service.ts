import { BaseEntityService } from '@webpackages/core';
import { Purchase } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchaseService extends BaseEntityService<Purchase> {
  constructor(@InjectRepository(Purchase) repo: Repository<Purchase>) {
    super(repo);
  }
}
