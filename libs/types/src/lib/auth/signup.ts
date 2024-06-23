import { Credentials } from './credentials';

export type Signup = Credentials & {
  orgname: string;
};
