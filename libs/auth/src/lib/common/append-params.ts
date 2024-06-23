import { ISession } from '@webpackages/models';
import { AuthHeaders } from '@webpackages/types';
import { Request } from 'express';

export function appendParams(req: Request, session: ISession) {
  const { token, user, scope, deviceId } = session;
  (req as any)[AuthHeaders.Session] = session;
  (req as any)[AuthHeaders.User] = user;
  (req as any)[AuthHeaders.AUTHORIZATION] = token;
  (req as any)[AuthHeaders.X_DEVICE_ID] = deviceId;
  (req as any)[AuthHeaders.X_SCOPE] = scope;
}
