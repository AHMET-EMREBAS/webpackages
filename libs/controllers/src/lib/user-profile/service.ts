import { BaseEntityService } from '@webpackages/database';
import { UserProfile, UserProfileView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserProfileService extends BaseEntityService<
  UserProfile,
  UserProfileView
> {
  constructor(
    @InjectRepository(UserProfile) repo: Repository<UserProfile>,
    @InjectRepository(UserProfileView) view: Repository<UserProfileView>
  ) {
    super(repo, view);
  }
}
