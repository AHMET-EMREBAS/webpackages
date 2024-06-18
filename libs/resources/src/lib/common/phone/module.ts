import { Module, OnModuleInit } from '@nestjs/common';
import { PhoneController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from './entities';
import { Repository } from 'typeorm';
import { PhoneService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Phone])],
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
