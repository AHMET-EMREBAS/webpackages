import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class LoginDto {
  @Property({ type: 'string', maxLength: 100, required: true, example:"root" })
  username: string;
  
  @Property({ type: 'string', maxLength: 100, required: true, example:'password' })
  password: string;
  
}

export class LoginResponse {
  @Property({ type: 'string' , example:"a;lsdjfqpwouerxjcvhskeuryqwieuyrhd"}) token: string;
}
