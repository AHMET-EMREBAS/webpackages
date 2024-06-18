import { Module, OnModuleInit } from '@nestjs/common';
import { UserImageController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { UserImage } from './entities';
import { Repository } from 'typeorm';
import { UserImageService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([UserImage])],
  controllers: [UserImageController],
  providers: [UserImageService],
})
export class UserImageModule implements OnModuleInit {
  constructor(
    @InjectRepository(UserImage) protected readonly repo: Repository<UserImage>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
