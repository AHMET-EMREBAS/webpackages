export function throwError(message: string): never {
  throw new Error(message);
}

export function notImpError(): never {
  throw new Error('Not Implemented');
}

