import { Module, OnModuleInit } from '@nestjs/common';
import { PhoneController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Phone, PhoneView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { PhoneService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Phone, PhoneView])],
  controllers: [PhoneController],
  providers: [PhoneService],
})
export class PhoneModule implements OnModuleInit {
  constructor(
    @InjectRepository(Phone) protected readonly repo: Repository<Phone>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
