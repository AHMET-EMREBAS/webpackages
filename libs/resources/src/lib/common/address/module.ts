import { Module, OnModuleInit } from '@nestjs/common';
import { AddressController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities';
import { Repository } from 'typeorm';
import { AddressService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule implements OnModuleInit {
  constructor(
    @InjectRepository(Address) protected readonly repo: Repository<Address>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
