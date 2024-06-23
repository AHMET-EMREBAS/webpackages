import { Property } from '@webpackages/property';
import { LoginResponse } from '@webpackages/types';
import { Exclude } from 'class-transformer';

@Exclude()
export class LoginResponseDto implements LoginResponse {
  @Property({
    type: 'string',
    description: 'JWT Access token',
    example: 'yuiqy72h8721491x7827983769shdjhsafc2873',
  })
  token: string;

  @Property({
    type: 'string',
    description: 'Unique Device ID',
    example: '982734-239472934-239784',
  })
  deviceId: string;
}


