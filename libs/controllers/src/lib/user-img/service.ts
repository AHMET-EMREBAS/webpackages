import { BaseEntityService } from '@webpackages/database';
import { UserImg } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserImgService extends BaseEntityService<UserImg> {
  constructor(@InjectRepository(UserImg) repo: Repository<UserImg>) {
    super(repo);
  }
}
