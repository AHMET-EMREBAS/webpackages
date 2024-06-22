import { BaseEntityService } from '@webpackages/database';
import { Profile, ProfileView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService extends BaseEntityService<Profile, ProfileView> {
  constructor(
    @InjectRepository(Profile) repo: Repository<Profile>,
    @InjectRepository(ProfileView) view: Repository<ProfileView>
  ) {
    super(repo, view);
  }
}
