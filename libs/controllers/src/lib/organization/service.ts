import { BaseEntityService } from '@webpackages/database';
import { Organization, OrganizationView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrganizationService extends BaseEntityService<
  Organization,
  OrganizationView
> {
  constructor(
    @InjectRepository(Organization) repo: Repository<Organization>,
    @InjectRepository(OrganizationView) view: Repository<OrganizationView>
  ) {
    super(repo, view);
  }
}
