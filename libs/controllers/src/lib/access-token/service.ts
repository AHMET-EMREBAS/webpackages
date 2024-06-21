import { BaseEntityService } from '@webpackages/database';
import { AccessToken } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccessTokenService extends BaseEntityService<AccessToken> {
  constructor(@InjectRepository(AccessToken) repo: Repository<AccessToken>) {
    super(repo);
  }
}
