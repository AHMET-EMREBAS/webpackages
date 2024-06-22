import { BaseEntityService } from '@webpackages/database';
import { CustomerImg, CustomerImgView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerImgService extends BaseEntityService<
  CustomerImg,
  CustomerImgView
> {
  constructor(
    @InjectRepository(CustomerImg) repo: Repository<CustomerImg>,
    @InjectRepository(CustomerImgView) view: Repository<CustomerImgView>
  ) {
    super(repo, view);
  }
}
