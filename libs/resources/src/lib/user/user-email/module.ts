import { Module, OnModuleInit } from '@nestjs/common';
import { UserEmailController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { UserEmail } from './entities';
import { Repository } from 'typeorm';
import { UserEmailService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEmail])],
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
