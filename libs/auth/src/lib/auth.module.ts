import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from './auth.service';
import { AuthGuard, LocalGuard } from './guards';
import { Repository } from 'typeorm';
import { User, Session, SessionView, UserView } from '@webpackages/entities';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({})),
    TypeOrmModule.forFeature([User, UserView, Session, SessionView]),
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
  protected readonly logger = new Logger('AuthModule');

  constructor(
    @InjectRepository(User) protected readonly repo: Repository<User>,
    protected readonly config: ConfigService
  ) {}

  async onModuleInit() {
    const found = await this.repo.findOneBy({ username: 'root' });

    const ROOT_USERNAME = this.config.getOrThrow('ROOT_USERNAME');
    const ROOT_PASSWORD = this.config.getOrThrow('ROOT_PASSWORD');

    this.logger.debug(`Root credentials : ${ROOT_USERNAME}@${ROOT_PASSWORD}`);

    if (found) {
      const savedRootUser = await this.repo.save({
        id: found.id,
        username: ROOT_USERNAME,
        password: ROOT_PASSWORD,
      });

      this.logger.debug(`Updated root user`);
      return;
    }

    this.logger.debug(`Saved root user`);
    await this.repo.save({
      username: ROOT_USERNAME,
      password: ROOT_PASSWORD,
      permissions: { Root: true },
    });
  }
}
