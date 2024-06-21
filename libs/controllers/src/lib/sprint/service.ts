import { BaseEntityService } from '@webpackages/database';
import { Sprint } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SprintService extends BaseEntityService<Sprint> {
  constructor(@InjectRepository(Sprint) repo: Repository<Sprint>) {
    super(repo);
  }
}
