import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerPhoneController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { CustomerPhone, CustomerPhoneView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CustomerPhoneService } from './service';
import { Customer, CustomerView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerPhone,
      CustomerPhoneView,
      Customer,
      CustomerView,
    ]),
  ],
  controllers: [CustomerPhoneController],
  providers: [CustomerPhoneService],
})
export class CustomerPhoneModule implements OnModuleInit {
  constructor(
    @InjectRepository(CustomerPhone)
    protected readonly repo: Repository<CustomerPhone>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
