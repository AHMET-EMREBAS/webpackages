import { Module, OnModuleInit } from '@nestjs/common';
import { UserEmailController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { UserEmail, UserEmailView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { UserEmailService } from './service';
import { User } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([UserEmail, UserEmailView, User])],
  controllers: [UserEmailController],
  providers: [UserEmailService],
})
export class UserEmailModule implements OnModuleInit {
  constructor(
    @InjectRepository(UserEmail) protected readonly repo: Repository<UserEmail>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
