import { BaseEntityService } from '@webpackages/database';
import { Project, ProjectView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService extends BaseEntityService<Project, ProjectView> {
  constructor(
    @InjectRepository(Project) repo: Repository<Project>,
    @InjectRepository(ProjectView) view: Repository<ProjectView>
  ) {
    super(repo, view);
  }
}
