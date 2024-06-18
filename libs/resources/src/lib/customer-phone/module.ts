import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerPhoneController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { CustomerPhone } from './entities';
import { Repository } from 'typeorm';
import { CustomerPhoneService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerPhone])],
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
