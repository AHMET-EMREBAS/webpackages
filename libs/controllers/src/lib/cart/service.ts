import { BaseEntityService } from '@webpackages/database';
import { Cart, CartView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService extends BaseEntityService<Cart, CartView> {
  constructor(
    @InjectRepository(Cart) repo: Repository<Cart>,
    @InjectRepository(CartView) view: Repository<CartView>
  ) {
    super(repo, view);
  }
}
