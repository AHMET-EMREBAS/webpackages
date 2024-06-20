import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class LoginDto {
  @Property({ type: 'string', maxLength: 100, required: true })
  username: string;
  
  @Property({ type: 'string', maxLength: 100, required: true })
  password: string;
  
}

export class LoginResponse {
  @Property({ type: 'string' }) token: string;
}
