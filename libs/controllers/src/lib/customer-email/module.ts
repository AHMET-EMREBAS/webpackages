import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerEmailController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEmail, CustomerEmailView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CustomerEmailService } from './service';
import { Customer } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerEmail, CustomerEmailView, Customer]),
  ],
  controllers: [CustomerEmailController],
  providers: [CustomerEmailService],
})
export class CustomerEmailModule implements OnModuleInit {
  constructor(
    @InjectRepository(CustomerEmail)
    protected readonly repo: Repository<CustomerEmail>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
