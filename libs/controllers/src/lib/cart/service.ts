import { BaseEntityService } from '@webpackages/database';
import { Cart } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService extends BaseEntityService<Cart> {
  constructor(@InjectRepository(Cart) repo: Repository<Cart>) {
    super(repo);
  }
}
