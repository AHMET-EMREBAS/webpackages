import { BaseEntityService } from '@webpackages/core';
import { Profile } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService extends BaseEntityService<Profile> {
  constructor(@InjectRepository(Profile) repo: Repository<Profile>) {
    super(repo);
  }
}
