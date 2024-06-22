import { BaseEntityService } from '@webpackages/database';
import { Department, DepartmentView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentService extends BaseEntityService<
  Department,
  DepartmentView
> {
  constructor(
    @InjectRepository(Department) repo: Repository<Department>,
    @InjectRepository(DepartmentView) view: Repository<DepartmentView>
  ) {
    super(repo, view);
  }
}
