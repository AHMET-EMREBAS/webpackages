export enum OperationNames {
  MANAGE = 'manage',
  READ = 'read',
  WRITE = 'write',
  UPDATE = 'update',
  DELETE = 'delete',
}

export type Operation = {
  manage: boolean;
  read: boolean;
  write: boolean;
  update: boolean;
  delete: boolean;
};
