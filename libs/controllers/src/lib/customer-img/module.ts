import { Module, OnModuleInit } from '@nestjs/common';
import { CustomerImgController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { CustomerImg, CustomerImgView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CustomerImgService } from './service';
import { Customer, CustomerView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerImg,
      CustomerImgView,
      Customer,
      CustomerView,
    ]),
  ],
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
