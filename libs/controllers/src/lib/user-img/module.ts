import { Module, OnModuleInit } from '@nestjs/common';
import { UserImgController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { UserImg, UserImgView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { UserImgService } from './service';
import { User, UserView } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([UserImg, UserImgView, User, UserView])],
  controllers: [UserImgController],
  providers: [UserImgService],
})
export class UserImgModule implements OnModuleInit {
  constructor(
    @InjectRepository(UserImg) protected readonly repo: Repository<UserImg>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
