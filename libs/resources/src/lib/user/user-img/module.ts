import { Module, OnModuleInit } from '@nestjs/common';
import { UserImgController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { UserImg } from './entities';
import { Repository } from 'typeorm';
import { UserImgService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([UserImg])],
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
