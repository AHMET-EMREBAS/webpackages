import { Module, OnModuleInit } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

import { Session, User } from '@webpackages/resources';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards';
import { LocalGuard } from './guards/local.guard';
import { Repository } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({})),
    TypeOrmModule.forFeature([User, Session]),
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      extraProviders: [ConfigService],
      useFactory(config: ConfigService) {
        const secret = config.getOrThrow('JWT_SECRET');
        return {
          secret,
          signOptions: {
            expiresIn: '60d',
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, LocalGuard],
  exports: [AuthService],
})
export class AuthModule implements OnModuleInit {
  constructor(
    @InjectRepository(User) protected readonly repo: Repository<User>,
    protected readonly config: ConfigService
  ) {}

  async onModuleInit() {
    const found = await this.repo.findOneBy({ username: 'root' });

    const ROOT_USERNAME = this.config.getOrThrow('ROOT_USERNAME');
    const ROOT_PASSWORD = this.config.getOrThrow('ROOT_PASSWORD');
    
    if (found) {
      await this.repo.update(found.id, {
        username: ROOT_USERNAME,
        password: ROOT_PASSWORD,
      });
      return;
    }

    await this.repo.save({
      username: ROOT_USERNAME,
      password: ROOT_PASSWORD,
      permissions: { Root: true },
    });
  }
}
