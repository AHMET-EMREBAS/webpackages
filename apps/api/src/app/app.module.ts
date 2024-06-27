import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonAppModule } from '@webpackages/boot-nest';
import { ResourceModule } from '@webpackages/controllers';
import { AppSeedModule } from './app-seed.module';

@Module({
  imports: [CommonAppModule, AppSeedModule, ResourceModule],
  providers: [AppService],
})
export class AppModule {}

@Module({
  imports: [CommonAppModule, ResourceModule],
  providers: [AppService],
})
export class PublicAppModule {}
