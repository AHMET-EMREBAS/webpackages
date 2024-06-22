import { BaseEntityService } from '@webpackages/database';
import { Order, OrderView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService extends BaseEntityService<Order, OrderView> {
  constructor(
    @InjectRepository(Order) repo: Repository<Order>,
    @InjectRepository(OrderView) view: Repository<OrderView>
  ) {
    super(repo, view);
  }
}
