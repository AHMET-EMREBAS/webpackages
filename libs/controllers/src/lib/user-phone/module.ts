import { Module, OnModuleInit } from '@nestjs/common';
import { UserPhoneController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { UserPhone, UserPhoneView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { UserPhoneService } from './service';
import { User, UserView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserPhone, UserPhoneView, User, UserView]),
  ],
  controllers: [UserPhoneController],
  providers: [UserPhoneService],
})
export class UserPhoneModule implements OnModuleInit {
  constructor(
    @InjectRepository(UserPhone) protected readonly repo: Repository<UserPhone>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
