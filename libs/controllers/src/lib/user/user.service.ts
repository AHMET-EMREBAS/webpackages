import { BaseEntityService } from '@webpackages/database';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from '@webpackges/entities';

@Injectable()
export class UserService extends BaseEntityService<User> {
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo);
  }
}
