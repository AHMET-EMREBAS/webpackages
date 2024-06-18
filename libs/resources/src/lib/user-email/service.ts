import { BaseEntityService } from '@webpackages/core';
import { UserEmail } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserEmailService extends BaseEntityService<UserEmail> {
  constructor(@InjectRepository(UserEmail) repo: Repository<UserEmail>) {
    super(repo);
  }
}
