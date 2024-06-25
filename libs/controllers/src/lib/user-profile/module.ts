import { Module, OnModuleInit } from '@nestjs/common';
import { UserProfileController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile, UserProfileView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { UserProfileService } from './service';
import { User } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfile, UserProfileView, User])],
  controllers: [UserProfileController],
  providers: [UserProfileService],
})
export class UserProfileModule implements OnModuleInit {
  constructor(
    @InjectRepository(UserProfile)
    protected readonly repo: Repository<UserProfile>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
