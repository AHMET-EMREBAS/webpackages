import { BaseEntityService } from '@webpackages/core';
import { AccessToken } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccessTokenService extends BaseEntityService<AccessToken> {
  constructor(@InjectRepository(AccessToken) repo: Repository<AccessToken>) {
    super(repo);
  }
}
