import { Metadata } from '@webpackages/types';

/**
 * ### Flow
 * - Token entity is created
 * - Token value is hashed
 * - Token is sent to the client
 * - Client make request with the token
 *
 *   - Token expiration is checked
 *   - Token is compared with the hashed token, if passed, continue, else throw error.
 *   - Token permissions are compared with the required resource permissions, if passed, continue, else throw error
 */
export const AccessTokenMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 100,
      inputType: 'text',
      example: 'Token name',
    },
    token: {
      type: 'string',
      label: 'Token salt',
      minLength: 10,
      maxLength: 100,
      inputType: 'text',
      format: 'token',
      update: false,
      example: 'wiqouer923784123uis918374jw892y43',
    },
    permissions: {
      type: 'object',
      targetName: 'AccessPolicy',
      description: 'User permissions',
      example: {
        Admin: true,
        Product: {
          manage: true,
        },
        User: {
          read: true,
          write: true,
          update: true,
          delete: true,
        },
      },
      update: false,
    },
  },
};
