import { Module, OnModuleInit } from '@nestjs/common';
import { SerialNumberController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { SerialNumber, SerialNumberView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { SerialNumberService } from './service';
import { Product, ProductView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SerialNumber,
      SerialNumberView,
      Product,
      ProductView,
    ]),
  ],
  controllers: [SerialNumberController],
  providers: [SerialNumberService],
})
export class SerialNumberModule implements OnModuleInit {
  constructor(
    @InjectRepository(SerialNumber)
    protected readonly repo: Repository<SerialNumber>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
