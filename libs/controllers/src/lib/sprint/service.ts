import { BaseEntityService } from '@webpackages/database';
import { Sprint, SprintView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SprintService extends BaseEntityService<Sprint, SprintView> {
  constructor(
    @InjectRepository(Sprint) repo: Repository<Sprint>,
    @InjectRepository(SprintView) view: Repository<SprintView>
  ) {
    super(repo, view);
  }
}
