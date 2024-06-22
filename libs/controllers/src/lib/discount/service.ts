import { BaseEntityService } from '@webpackages/database';
import { Discount, DiscountView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscountService extends BaseEntityService<Discount, DiscountView> {
  constructor(
    @InjectRepository(Discount) repo: Repository<Discount>,
    @InjectRepository(DiscountView) view: Repository<DiscountView>
  ) {
    super(repo, view);
  }
}
