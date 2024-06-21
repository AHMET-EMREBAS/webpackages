import { BaseEntityService } from '@webpackages/database';
import { Discount } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscountService extends BaseEntityService<Discount> {
  constructor(@InjectRepository(Discount) repo: Repository<Discount>) {
    super(repo);
  }
}
