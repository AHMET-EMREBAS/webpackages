import { AuthClient } from '@webpackages/auth-client';
import { ISession } from '@webpackages/models';
import { AuthPathBuilder } from '@webpackages/path';
import { fail } from 'assert';
import { AxiosError } from 'axios';

const client = new AuthClient(
  new AuthPathBuilder({ prefix: 'api/auth' }),
  'http://localhost:3000'
);
describe('AuthClient', () => {
  describe('Login', () => {
    let session: ISession;
    beforeAll(async () => {
      session = await client.login({
        username: 'root',
        password: 'password',
      });
    });

    it('should return the session data', () => {
      expect(session.id).toBeTruthy();
      expect(session.user).toBeTruthy();
      expect(session.user.username).toBe('root');
      expect(session.user.permissions).toBeTruthy();
      expect(session.user.permissions.Root).toBeTruthy();
      expect(session.token).toBeTruthy();
      expect(session.deviceId).toBeTruthy();
    });

    it('should request forgot-password', async () => {
      const res = await client.forgotPassword({ username: 'root' });
      expect(res.message).toBe(
        'Check your inbox. We just sent a password reset link.'
      );
    });

    it('should return User not found message for unkown user', async () => {
      const res = (await client.forgotPassword({
        username: 'unkown',
      })) as AxiosError;
      expect(res.message).toBe('User not found!');
    });
  });
});
