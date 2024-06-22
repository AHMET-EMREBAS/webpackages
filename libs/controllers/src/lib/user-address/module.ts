import { Module, OnModuleInit } from '@nestjs/common';
import { UserAddressController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { UserAddress, UserAddressView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { UserAddressService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([UserAddress, UserAddressView])],
  controllers: [UserAddressController],
  providers: [UserAddressService],
})
export class UserAddressModule implements OnModuleInit {
  constructor(
    @InjectRepository(UserAddress)
    protected readonly repo: Repository<UserAddress>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
