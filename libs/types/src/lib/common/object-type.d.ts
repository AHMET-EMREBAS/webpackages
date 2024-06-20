export interface ObjectType<T = any> {
    new (...args: any[]): T;
}
