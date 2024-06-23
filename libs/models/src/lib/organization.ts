import {  BaseEntity } from '@webpackages/types';
import { IUser } from './user';

export interface IOrganization extends BaseEntity {
 

        name: string ;
        
 
        manager: IUser;
        
}
