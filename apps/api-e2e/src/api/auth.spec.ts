import { AuthClient } from '@webpackages/auth-client';
import { ISession } from '@webpackages/models';
import { AuthPathBuilder } from '@webpackages/path';

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

      expect(res.message).toBeTruthy();
    });
  });
});
