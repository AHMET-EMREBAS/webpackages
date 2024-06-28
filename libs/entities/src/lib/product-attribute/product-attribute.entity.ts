import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IProductAttribute } from '@webpackages/models';

import { Product } from '../product'

@Entity()
export class ProductAttribute extends BaseEntity implements IProductAttribute  { 
  
  @Column({ type:'string',required:true }) key:string 
@Column({ type:'string',required:true }) value:string 

  @Relation({relationType:'owner', target:Product }) product:Product;
}
