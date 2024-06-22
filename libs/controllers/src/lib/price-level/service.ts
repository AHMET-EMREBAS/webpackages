import { BaseEntityService } from '@webpackages/database';
import { PriceLevel, PriceLevelView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceLevelService extends BaseEntityService<
  PriceLevel,
  PriceLevelView
> {
  constructor(
    @InjectRepository(PriceLevel) repo: Repository<PriceLevel>,
    @InjectRepository(PriceLevelView) view: Repository<PriceLevelView>
  ) {
    super(repo, view);
  }
}
