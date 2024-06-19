import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Session, User } from '@webpackages/resources';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards';
import { LocalGuard } from './guards/local.guard';

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
export class AuthModule {}
