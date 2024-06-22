import { BaseEntityService } from '@webpackages/database';
import { Manufacturer, ManufacturerView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManufacturerService extends BaseEntityService<
  Manufacturer,
  ManufacturerView
> {
  constructor(
    @InjectRepository(Manufacturer) repo: Repository<Manufacturer>,
    @InjectRepository(ManufacturerView) view: Repository<ManufacturerView>
  ) {
    super(repo, view);
  }
}
