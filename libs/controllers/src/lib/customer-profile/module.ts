import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerProfileController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { CustomerProfile, CustomerProfileView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CustomerProfileService } from './service';
import { Customer, CustomerView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerProfile,
      CustomerProfileView,
      Customer,
      CustomerView,
    ]),
  ],
  controllers: [CustomerProfileController],
  providers: [CustomerProfileService],
})
export class CustomerProfileModule implements OnModuleInit {
  constructor(
    @InjectRepository(CustomerProfile)
    protected readonly repo: Repository<CustomerProfile>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
