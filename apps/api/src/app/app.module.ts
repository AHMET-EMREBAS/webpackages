import { Module, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonAppModule } from '@webpackages/boot-nest';
import * as RestModules from '@webpackages/controllers';
import * as Subscribers from '@webpackages/entities';
import { Category } from '@webpackages/entities';
import { DatabaseModule } from '@webpackages/database';
import { AuthModule, provideGlobalAuthGuard } from '@webpackages/auth';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getBuiltinCategories } from '@webpackages/data';

@Module({
  imports: [
    CommonAppModule,
    AuthModule,
    DatabaseModule.configure({
      subscribers: [
        ...Object.values(Subscribers).filter((e) =>
          e.name.endsWith('Susbscriber')
        ),
      ],
    }),
    ...Object.values(RestModules).filter((e) => e.name.endsWith('Module')),
  ],
  providers: [AppService, provideGlobalAuthGuard()],
})
export class AppModule {}

@Module({
  imports: [
    CommonAppModule,
    DatabaseModule.configure({
      subscribers: [
        ...Object.values(Subscribers).filter((e) =>
          e.name.endsWith('Susbscriber')
        ),
      ],
    }),
    TypeOrmModule.forFeature([Category]),
    ...Object.values(RestModules).filter((e) => e.name.endsWith('Module')),
  ],
})
export class PublicAppModule implements OnModuleInit {
  constructor(
    @InjectRepository(Category)
    protected readonly categoryRepo: Repository<Category>
  ) {}

  onModuleInit() {
    this.categoryRepo.save(getBuiltinCategories(), { transaction: false });
  }
}
