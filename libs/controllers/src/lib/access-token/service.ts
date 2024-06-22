import { BaseEntityService } from '@webpackages/database';
import { AccessToken, AccessTokenView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccessTokenService extends BaseEntityService<
  AccessToken,
  AccessTokenView
> {
  constructor(
    @InjectRepository(AccessToken) repo: Repository<AccessToken>,
    @InjectRepository(AccessTokenView) view: Repository<AccessTokenView>
  ) {
    super(repo, view);
  }
}
