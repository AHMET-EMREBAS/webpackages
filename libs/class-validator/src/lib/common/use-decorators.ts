export function UseDecorators(
  decorators: PropertyDecorator[]
): PropertyDecorator {
  return function (target, propertyKey) {
    for (const d of decorators) {
      return d(target, propertyKey);
    }
  };
}
