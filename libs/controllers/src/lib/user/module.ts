import { Module, OnModuleInit } from '@nestjs/common';
import { UserController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { User, UserView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { UserService } from './service';
import { Department } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserView, Department])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements OnModuleInit {
  constructor(
    @InjectRepository(User) protected readonly repo: Repository<User>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
