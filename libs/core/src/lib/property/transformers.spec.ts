import { TransformOptions, transformNumber } from './transformers';
describe('Transformers', () => {
  describe('NumberTransformer', () => {
    it('should transform number', () => {
      expect(transformNumber('123')).toBe(123);

      expect(transformNumber('')).toBe(NaN);
    });
  });
});
