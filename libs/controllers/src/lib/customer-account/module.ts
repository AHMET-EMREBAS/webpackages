import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerAccountController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { CustomerAccount, CustomerAccountView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CustomerAccountService } from './service';
import { Customer } from '@webpackages/entities';
import { PriceLevel } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerAccount,
      CustomerAccountView,
      Customer,
      PriceLevel,
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
