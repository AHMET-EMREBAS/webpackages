import { BaseEntityService } from '@webpackages/database';
import { UserPhone, UserPhoneView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPhoneService extends BaseEntityService<
  UserPhone,
  UserPhoneView
> {
  constructor(
    @InjectRepository(UserPhone) repo: Repository<UserPhone>,
    @InjectRepository(UserPhoneView) view: Repository<UserPhoneView>
  ) {
    super(repo, view);
  }
}
