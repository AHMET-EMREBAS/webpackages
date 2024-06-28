import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IAccessToken } from '@webpackages/models';
import {AccessPolicy} from '@webpackages/types';


@Entity()
export class AccessToken extends BaseEntity implements IAccessToken  { 
  
  @Column({ type:'string',required:true }) name:string 
@Column({ type:'string',format:'token' }) token:string 
@Column({ type:'object' }) permissions:AccessPolicy 

  
}
