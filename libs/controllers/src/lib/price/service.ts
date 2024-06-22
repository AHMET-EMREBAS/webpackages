import { BaseEntityService } from '@webpackages/database';
import { Price, PriceView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceService extends BaseEntityService<Price, PriceView> {
  constructor(
    @InjectRepository(Price) repo: Repository<Price>,
    @InjectRepository(PriceView) view: Repository<PriceView>
  ) {
    super(repo, view);
  }
}
