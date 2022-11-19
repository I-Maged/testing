import calculator from './calculator';

describe('Calculator', () => {
  describe('Validation', () => {
    test('validate first number', () => {
      expect(calculator(4, 'z', '+')).toBe('Inputs must be numbers');
    });
    test('validate second number', () => {
      expect(calculator('x', 5, '+')).toBe('Inputs must be numbers');
    });
    test('validate operator', () => {
      expect(calculator(4, 5, 6)).toBe('Invalid operator');
    });
  });

  describe('addition', () => {
    test('adds 0 and 0', () => {
      expect(calculator(0, 0, '+')).toBe(0);
    });
    test('adds positive numbers', () => {
      expect(calculator(2, 6, '+')).toBe(8);
    });
    test('adds negative and positive numbers', () => {
      expect(calculator(-2, 6, '+')).toBe(4);
    });
  });

  describe('subtract', () => {
    test('subtracts numbers', () => {
      expect(calculator(10, 4, '-')).toBe(6);
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers', () => {
      expect(calculator(3, 6, '*')).toBe(18);
    });
    test('multiplies negative and positive numbers', () => {
      expect(calculator(5, -4, '*')).toBe(-20);
    });
    test('multiplies by zero', () => {
      expect(calculator(5, 0, '*')).toBe(0);
    });
  });

  describe('divide', () => {
    test('divide two numbers', () => {
      expect(calculator(6, 3, '/')).toBe(2);
    });
    test('multiplies negative and positive numbers', () => {
      expect(calculator(6, -3, '/')).toBe(-2);
    });
    test('divide with fraction', () => {
      expect(calculator(3, 0.5, '/')).toBe(6);
    });
  });
});
