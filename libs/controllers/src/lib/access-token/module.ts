import { Module, OnModuleInit } from '@nestjs/common';
import { AccessTokenController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { AccessToken, AccessTokenView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { AccessTokenService } from './service';
import { User } from '@webpackages/entities';

@Module({
  imports: [TypeOrmModule.forFeature([AccessToken, AccessTokenView, User])],
  controllers: [AccessTokenController],
  providers: [AccessTokenService],
})
export class AccessTokenModule implements OnModuleInit {
  constructor(
    @InjectRepository(AccessToken)
    protected readonly repo: Repository<AccessToken>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
