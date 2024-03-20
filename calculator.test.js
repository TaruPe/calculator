const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('adds 5 + 2 to equal 7', () => {
    expect(calculator.add(5, 2)).toBe(7);
  });

  test('subtracts 8 - 4 to equal 4', () => {
    expect(calculator.subtract(8, 4)).toBe(4);
  });

  test('multiplies 5 * 8 to equal 40', () => {
    expect(calculator.multiply(5, 8)).toBe(40);
  });

  test('divides 9 by 3 to equal 3', () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => {
      calculator.divide(10, 0);
    }).toThrow('Division by zero is not allowed');
  });
});
