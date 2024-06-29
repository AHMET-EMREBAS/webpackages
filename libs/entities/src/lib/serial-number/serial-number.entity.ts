import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISerialNumber } from '@webpackages/models';

import { Product } from '../product'

@Entity()
export class SerialNumber extends BaseEntity implements ISerialNumber  { 
  
  @Column({ type:'boolean' }) required:boolean 
@Column({ type:'string',required:true }) type:string 
@Column({ type:'string' }) prefix:string 
@Column({ type:'string',unique:true }) serialNumber:string 

  @Relation({relationType:'owner', target:Product }) product:Product;
}
