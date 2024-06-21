import { BaseView, baseQueryBuilder } from '@webpackages/database';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Img } from './img.entity';
import { ImgMetadata } from '@webpackages/metadata';

@ViewEntity({
  expression(ds) {
    return baseQueryBuilder<Img>(ds, Img, ImgMetadata);
  },
})
export class ImgView extends BaseView {
  @ViewColumn() title: string;
  @ViewColumn() generatedName: string;
}
