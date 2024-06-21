import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerAddressController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { CustomerAddress } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CustomerAddressService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerAddress])],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
})
export class CustomerAddressModule implements OnModuleInit {
  constructor(
    @InjectRepository(CustomerAddress)
    protected readonly repo: Repository<CustomerAddress>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
