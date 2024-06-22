import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerEmailController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEmail, CustomerEmailView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CustomerEmailService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEmail, CustomerEmailView])],
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
