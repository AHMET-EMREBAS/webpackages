import { unique } from './unique';
describe('Unique', () => {
  it('should unique items', () => {
    const __equal = <T>(a: T[], b: T[]) =>
      expect(JSON.stringify(unique(a))).toBe(JSON.stringify(b));

    __equal(unique(['a', 'a']), ['a']);
    __equal(unique(['a', 'b']), ['a', 'b']);
    __equal(unique([1, 1, 1, 1]), [1]);
    __equal(
      unique(
        [
          { id: 1, name: 'some' },
          { id: 1, name: 'some' },
          { id: 1, name: 'some' },
          { id: 1, name: 'some' },
          { id: 1, name: 'some' },
        ],
        { uniqueKey: 'id' }
      ),
      [{ id: 1, name: 'some' }]
    );

    __equal(
      unique<{ key: string; value: string }>(
        [
          { key: 'a', value: 'attr' },
          { key: 'a', value: 'attr' },
          { key: 'a', value: 'attr' },
          { key: 'a', value: 'attr' },
          undefined as any,
          null as any,
        ],
        {
          uniqueKey: 'key',
        }
      ),
      [{ key: 'a', value: 'attr' }]
    );
  });
});
