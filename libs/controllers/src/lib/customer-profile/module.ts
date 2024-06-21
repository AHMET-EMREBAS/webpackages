import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerProfileController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { CustomerProfile } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CustomerProfileService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerProfile])],
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
