import { Module, OnModuleInit } from '@nestjs/common';
import { UserProfileController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './entities';
import { Repository } from 'typeorm';
import { UserProfileService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfile])],
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
