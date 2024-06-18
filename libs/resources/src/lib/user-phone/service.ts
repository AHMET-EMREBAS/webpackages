import { BaseEntityService } from '@webpackages/core';
import { UserPhone } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPhoneService extends BaseEntityService<UserPhone> {
  constructor(@InjectRepository(UserPhone) repo: Repository<UserPhone>) {
    super(repo);
  }
}
