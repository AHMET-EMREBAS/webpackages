import { Module, OnModuleInit } from '@nestjs/common';
import { EmailController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Email, EmailView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { EmailService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Email, EmailView])],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule implements OnModuleInit {
  constructor(
    @InjectRepository(Email) protected readonly repo: Repository<Email>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
