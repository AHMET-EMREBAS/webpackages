import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Customer, CustomerView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CustomerService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, CustomerView])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule implements OnModuleInit {
  constructor(
    @InjectRepository(Customer) protected readonly repo: Repository<Customer>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
