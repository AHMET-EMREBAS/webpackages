import { BaseEntityService } from '@webpackages/database';
import { UserEmail, UserEmailView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserEmailService extends BaseEntityService<
  UserEmail,
  UserEmailView
> {
  constructor(
    @InjectRepository(UserEmail) repo: Repository<UserEmail>,
    @InjectRepository(UserEmailView) view: Repository<UserEmailView>
  ) {
    super(repo, view);
  }
}
