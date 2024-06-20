export function UseDecorators(
  decorators: PropertyDecorator[]
): PropertyDecorator {
  return function (target, propertyKey) {
    for (const nDecorator of decorators) {
      nDecorator(target, propertyKey);
    }
  };
}
