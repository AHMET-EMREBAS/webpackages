import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonAppModule } from '@webpackages/boot-nest';

import { UserModule } from '@webpackages/controllers';

@Module({
  imports: [CommonAppModule, UserModule],
  providers: [AppService],
})
export class AppModule {}
