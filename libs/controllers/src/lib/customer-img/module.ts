import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerImgController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { CustomerImg } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CustomerImgService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerImg])],
  controllers: [CustomerImgController],
  providers: [CustomerImgService],
})
export class CustomerImgModule implements OnModuleInit {
  constructor(
    @InjectRepository(CustomerImg)
    protected readonly repo: Repository<CustomerImg>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
