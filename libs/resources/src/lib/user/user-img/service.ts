import { BaseEntityService } from '@webpackages/core';
import { UserImg } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserImgService extends BaseEntityService<UserImg> {
  constructor(@InjectRepository(UserImg) repo: Repository<UserImg>) {
    super(repo);
  }
}
