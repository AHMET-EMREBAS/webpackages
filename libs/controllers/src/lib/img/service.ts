import { BaseEntityService } from '@webpackages/database';
import { Img } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImgService extends BaseEntityService<Img> {
  constructor(@InjectRepository(Img) repo: Repository<Img>) {
    super(repo);
  }
}
