import { BaseEntityService } from '@webpackages/database';
import { Manufacturer } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManufacturerService extends BaseEntityService<Manufacturer> {
  constructor(@InjectRepository(Manufacturer) repo: Repository<Manufacturer>) {
    super(repo);
  }
}
