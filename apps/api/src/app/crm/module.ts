import { Module } from '@nestjs/common';
import {} from '@webpackages/resources/customer';
import { CustomerAddressModule } from '@webpackages/resources/customer-address';
import { CustomerEmailModule } from '@webpackages/resources/customer-email';
import { CustomerPhoneModule } from '@webpackages/resources/customer-phone';
import { CustomerProfileModule } from '@webpackages/resources/customer-profile';

@Module({
  imports: [
    CustomerAddressModule,
    CustomerEmailModule,
    CustomerPhoneModule,
    CustomerProfileModule,
  ],
})
export class CrmModule {}
