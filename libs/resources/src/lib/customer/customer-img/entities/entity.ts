import { Entity, Relation } from '@webpackages/core';
import { Img } from '../../../common';
import { Customer } from '../../customer/entities';

@Entity()
export class CustomerImg extends Img {
  @Relation({ type: 'owner', target: Customer }) user: Customer;
}
