import RandomHelper from './random-helper';

describe('RandomHelper', () => {
  describe('GetRandomInt(n)', () => {
    it('should return a random integer between 0 and n', () => {
      const randomInt = RandomHelper.getRandomInt(10);

      expect(randomInt).toBeLessThan(10);
      expect(randomInt).toBeGreaterThanOrEqual(0);
    });
  });
});
