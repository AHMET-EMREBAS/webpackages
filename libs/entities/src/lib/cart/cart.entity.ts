import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICart } from '@webpackages/models';
import { Customer } from '../customer';
import { User } from '../user';

@Entity()
export class Cart extends BaseEntity implements ICart {
  @Column({ type: 'boolean', required: false, unique: false })
  complete: boolean;

  @Relation({ relationType: 'owner', target: Customer })
  customer: Customer;

  @Relation({ relationType: 'owner', target: User })
  user: User;
}
