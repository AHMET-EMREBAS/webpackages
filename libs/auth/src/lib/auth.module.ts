import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { ConfigService } from '@nestjs/config';
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        const secret = config.getOrThrow('JWT_SECRERT');

        return {
          secret,
          signOptions: {
            expiresIn: '60d',
          },
        };
      },
    }),
  ],
})
export class AuthModule {}
