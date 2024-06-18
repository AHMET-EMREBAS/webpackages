import { BaseEntityService } from '@webpackages/core';
import { Img } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImgService extends BaseEntityService<Img> {
  constructor(@InjectRepository(Img) repo: Repository<Img>) {
    super(repo);
  }
}
