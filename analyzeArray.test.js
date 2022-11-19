import analyzeArray from './analyzeArray';

describe('analyze Array', () => {
  test('validate array', () => {
    expect(analyzeArray('x')).toBe('Input must be an array');
  });
  test('validate array values', () => {
    expect(analyzeArray([2, 4, 'x'])).toBe('array values must be numbers');
  });
  test('numbers array', () => {
    expect(analyzeArray([2, 4, 1, 3, 5])).toMatchObject({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });
});
