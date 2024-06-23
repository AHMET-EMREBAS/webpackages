import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonAppModule } from '@webpackages/boot-nest';
import * as RestModules from '@webpackages/controllers';
import * as Subscribers from '@webpackages/entities';
import { DatabaseModule } from '@webpackages/database';
import { AuthModule} from '@webpackages/auth'
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
  providers: [AppService],
})
export class AppModule {}
