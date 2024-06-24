/**
 * Common roles
 */
export enum Roles {
  ADMIN = 'Admin',
  ROOT = 'Root',
}

export type RoleNames = 'Admin' | 'Root' | 'Reader';

export type RolePolicy = {
  Admin: boolean;
  Root: boolean;
  Reader: boolean;
};
