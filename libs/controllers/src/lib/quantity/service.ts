import { BaseEntityService } from '@webpackages/database';
import { Quantity, QuantityView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuantityService extends BaseEntityService<Quantity, QuantityView> {
  constructor(
    @InjectRepository(Quantity) repo: Repository<Quantity>,
    @InjectRepository(QuantityView) view: Repository<QuantityView>
  ) {
    super(repo, view);
  }
}
