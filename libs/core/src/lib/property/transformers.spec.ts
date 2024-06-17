import {
  transformBoolean,
  transformDate,
  transformInt,
  transformNumber,
} from './transformers';
describe('Transformers', () => {
  describe('NumberTransformer', () => {
    it('should transform number', () => {
      expect(transformNumber(-123.33)).toBe(-123.33);
      expect(transformNumber(123.33)).toBe(123.33);
      expect(transformNumber('123.33')).toBe(123.33);
      expect(transformNumber('')).toBe(NaN);
    });

    it('should transform int', () => {
      expect(transformInt(-123.5)).toBe(-123.5);
      expect(transformInt(-123)).toBe(-123);
      expect(transformInt(123)).toBe(123);
      expect(transformInt('123')).toBe(123);
      expect(transformInt('123.5')).toBe(123);
      expect(transformInt('')).toBe(NaN);
    });

    it('should transform boolean', () => {
      expect(transformBoolean(true)).toBe(true);
      expect(transformBoolean(false)).toBe(false);
      expect(transformBoolean('true')).toBe(true);
      expect(transformBoolean('false')).toBe(false);
      expect(transformBoolean('')).toBe(undefined);
      expect(transformBoolean(' ')).toBe(undefined);
      expect(transformBoolean('TRUE')).toBe(undefined);
      expect(transformBoolean('FALSE')).toBe(undefined);
    });

    it('should transform date', () => {
      expect(transformDate('')).toBe(undefined);
      expect(transformDate(' ')).toBe(undefined);
      expect(transformDate('10-10-10')).toBeInstanceOf(Date);
      expect(transformDate(new Date())).toBeInstanceOf(Date);
    });
  });
});
