import { Module } from '@nestjs/common';
import {
  CustomerAddressModule,
  CustomerEmailModule,
  CustomerModule,
  CustomerPhoneModule,
  CustomerProfileModule,
} from '@webpackages/resources/customer';

@Module({
  imports: [
    CustomerModule,
    CustomerAddressModule,
    CustomerEmailModule,
    CustomerPhoneModule,
    CustomerProfileModule,
  ],
})
export class CrmModule {}
