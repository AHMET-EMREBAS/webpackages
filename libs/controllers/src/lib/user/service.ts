import { BaseEntityService } from '@webpackages/database';
import { User, UserView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends BaseEntityService<User, UserView> {
  constructor(
    @InjectRepository(User) repo: Repository<User>,
    @InjectRepository(UserView) view: Repository<UserView>
  ) {
    super(repo, view);
  }
}
