import { BaseEntityService } from '@webpackages/database';
import { Sale, SaleView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SaleService extends BaseEntityService<Sale, SaleView> {
  constructor(
    @InjectRepository(Sale) repo: Repository<Sale>,
    @InjectRepository(SaleView) view: Repository<SaleView>
  ) {
    super(repo, view);
  }
}
