import { Module, OnModuleInit } from '@nestjs/common';
import { ProfileController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Profile, ProfileView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { ProfileService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, ProfileView])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule implements OnModuleInit {
  constructor(
    @InjectRepository(Profile) protected readonly repo: Repository<Profile>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
