import { BaseEntityService } from '@webpackages/core';
import { Cart } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService extends BaseEntityService<Cart> {
  constructor(@InjectRepository(Cart) repo: Repository<Cart>) {
    super(repo);
  }
}
