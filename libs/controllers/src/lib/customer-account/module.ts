import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerAccountController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { CustomerAccount, CustomerAccountView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CustomerAccountService } from './service';
import { Customer, CustomerView } from '@webpackages/entities';
import { PriceLevel, PriceLevelView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerAccount,
      CustomerAccountView,
      Customer,
      CustomerView,
      PriceLevel,
      PriceLevelView,
    ]),
  ],
  controllers: [CustomerAccountController],
  providers: [CustomerAccountService],
})
export class CustomerAccountModule implements OnModuleInit {
  constructor(
    @InjectRepository(CustomerAccount)
    protected readonly repo: Repository<CustomerAccount>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
