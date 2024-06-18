import { Entity, Relation } from '@webpackages/core';
import { Img } from '../../../common';

@Entity()
export class ProductImg extends Img {
  @Relation({ type: 'owner', target: 'Product' }) product: unknown;
}
