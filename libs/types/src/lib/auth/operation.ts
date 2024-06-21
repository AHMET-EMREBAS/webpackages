export type OperationName = 'manage' | 'read' | 'write' | 'update' | 'delete';

export enum OperationNames {
  MANAGE = 'manage',
  READ = 'read',
  WRITE = 'write',
  UPDATE = 'update',
  DELETE = 'delete',
}

export class Operation {
  manage: boolean;
  read: boolean;
  write: boolean;
  update: boolean;
  delete: boolean;
}
