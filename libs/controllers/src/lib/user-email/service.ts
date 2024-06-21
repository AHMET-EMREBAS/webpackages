import { BaseEntityService } from '@webpackages/database';
import { UserEmail } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserEmailService extends BaseEntityService<UserEmail> {
  constructor(@InjectRepository(UserEmail) repo: Repository<UserEmail>) {
    super(repo);
  }
}
