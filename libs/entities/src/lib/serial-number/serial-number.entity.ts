import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISerialNumber } from '@webpackages/models';

import { Sku } from '../sku'

@Entity()
export class SerialNumber extends BaseEntity implements ISerialNumber  { 
  
  @Column({ type:'string',required:true,unique:true }) serialNumber:string 
@Column({ type:'boolean' }) required:boolean 
@Column({ type:'string',required:true }) type:string 
@Column({ type:'string' }) prefix:string 
@Column({ type:'string' }) suffix:string 

  @Relation({relationType:'owner', target:Sku }) sku:Sku;
}
