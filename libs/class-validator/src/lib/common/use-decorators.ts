export function UseDecorators(
  decorators: PropertyDecorator[]
): PropertyDecorator {
  return function (target, propertyKey) {
    decorators?.forEach((decorator) => {
      decorator(target, propertyKey);
    });
  };
}
