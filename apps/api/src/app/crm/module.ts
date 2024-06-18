import { Module } from '@nestjs/common';
import {} from '@webpackages/resources/customer';
import { CustomerAddressModule } from '@webpackages/resources/customer-address';
import { CustomerEmailModule } from '@webpackages/resources/customer-email';
import { CustomerPhoneModule } from '@webpackages/resources/customer-phone';

@Module({
  imports: [CustomerAddressModule, CustomerEmailModule, CustomerPhoneModule],
})
export class CrmModule {}
