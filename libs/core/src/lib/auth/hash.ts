import { createHash } from 'crypto';
export function hash(value: string) {
  return createHash('sha256').update(value).digest('hex');
}

export function compareHash(value: string, hashValue: string) {
  return hash(value) === hashValue;
}
