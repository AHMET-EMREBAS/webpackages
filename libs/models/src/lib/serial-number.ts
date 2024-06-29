import {  BaseEntity } from '@webpackages/types';
import { ISku } from './sku';

export interface ISerialNumber extends BaseEntity {
 

        serialNumber: string ;
        


        required: boolean ;
        


        type: string ;
        


        prefix: string ;
        


        suffix: string ;
        
 
        sku: ISku;
        
}
