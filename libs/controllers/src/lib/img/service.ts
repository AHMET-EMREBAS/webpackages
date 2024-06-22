import { BaseEntityService } from '@webpackages/database';
import { Img, ImgView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImgService extends BaseEntityService<Img, ImgView> {
  constructor(
    @InjectRepository(Img) repo: Repository<Img>,
    @InjectRepository(ImgView) view: Repository<ImgView>
  ) {
    super(repo, view);
  }
}
