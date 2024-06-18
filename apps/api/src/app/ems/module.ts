import { Module } from '@nestjs/common';
import {
  ClockInModule,
  UserModule,
  UserAddressModule,
  UserEmailModule,
  UserImgModule,
  UserPhoneModule,
  UserProfileModule,
} from '@webpackages/resources/user';

@Module({
  imports: [
    ClockInModule,
    UserModule,
    UserAddressModule,
    UserEmailModule,
    UserImgModule,
    UserPhoneModule,
    UserProfileModule,
  ],
})
export class EmsModule {}
