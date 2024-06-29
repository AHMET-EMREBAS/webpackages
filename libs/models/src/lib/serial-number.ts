import {  BaseEntity } from '@webpackages/types';
import { IProduct } from './product';

export interface ISerialNumber extends BaseEntity {
 

        required: boolean ;
        


        type: string ;
        


        prefix: string ;
        


        suffix: string ;
        


        serialNumber: string ;
        
 
        product: IProduct;
        
}
