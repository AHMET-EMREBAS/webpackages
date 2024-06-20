export function UseDecorators(
  decorators: PropertyDecorator[]
): PropertyDecorator {
  return function (target, propertyKey, args?: any) {
    for (const nDecorator of decorators) {
      (nDecorator as any)(target, propertyKey, args);
    }
  };
}
