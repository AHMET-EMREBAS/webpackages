import { BaseEntityService } from '@webpackages/database';
import { UserImg, UserImgView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserImgService extends BaseEntityService<UserImg, UserImgView> {
  constructor(
    @InjectRepository(UserImg) repo: Repository<UserImg>,
    @InjectRepository(UserImgView) view: Repository<UserImgView>
  ) {
    super(repo, view);
  }
}
