import { Module, OnModuleInit } from '@nestjs/common';
import { SerialNumberController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { SerialNumber } from './entities';
import { Repository } from 'typeorm';
import { SerialNumberService } from './service';
import { Product } from '../product';

@Module({
  imports: [TypeOrmModule.forFeature([SerialNumber, Product])],
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
