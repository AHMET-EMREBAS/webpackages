import { BaseEntityService } from '@webpackages/core';
import { UserImage } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserImageService extends BaseEntityService<UserImage> {
  constructor(@InjectRepository(UserImage) repo: Repository<UserImage>) {
    super(repo);
  }
}
