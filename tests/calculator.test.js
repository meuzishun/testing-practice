import { calculator } from '../code/calculator.js';

// ====== ADDITION TESTS ======
test('1 + 1 = 2', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('1 + 2 = 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('1 + 10 = 11', () => {
  expect(calculator.add(1, 10)).toBe(11);
});

test('11 + 24 = 35', () => {
  expect(calculator.add(11, 24)).toBe(35);
});

test('11 + myStr throws Error', () => {
  expect(() => calculator.add(11, 'myStr')).toThrow(
    'Both arguments must be numbers'
  );
});

test('11 + obj throws Error', () => {
  expect(() => calculator.add(11, { num: 21 })).toThrow(
    'Both arguments must be numbers'
  );
});

test('11 + obj throws Error', () => {
  expect(() => calculator.add(11, null)).toThrow(
    'Both arguments must be numbers'
  );
});

test('11 + obj throws Error', () => {
  expect(() => calculator.add(11, undefined)).toThrow(
    'Both arguments must be numbers'
  );
});

// ====== SUBTRACTION TESTS ======
test('2 - 1 = 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('1 - 2 = -1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('10 - 1 = 9', () => {
  expect(calculator.subtract(10, 1)).toBe(9);
});

test('11 - 24 = -13', () => {
  expect(calculator.subtract(11, 24)).toBe(-13);
});

test('11 - myStr throws Error', () => {
  expect(() => calculator.subtract(11, 'myStr')).toThrow(
    'Both arguments must be numbers'
  );
});

test('11 - obj throws Error', () => {
  expect(() => calculator.subtract(11, { num: 21 })).toThrow(
    'Both arguments must be numbers'
  );
});

// ====== MULTIPLICATION TESTS ======
test('2 * 1 = 2', () => {
  expect(calculator.multiply(2, 1)).toBe(2);
});

test('4 * 0 = 0', () => {
  expect(calculator.multiply(4, 0)).toBe(0);
});

test('10 * -2 = -20', () => {
  expect(calculator.multiply(10, -2)).toBe(-20);
});

test('-11 * -3 = 33', () => {
  expect(calculator.multiply(-11, -3)).toBe(33);
});

test('11 * myStr throws Error', () => {
  expect(() => calculator.multiply(11, 'myStr')).toThrow(
    'Both arguments must be numbers'
  );
});

test('11 * obj throws Error', () => {
  expect(() => calculator.multiply(11, { num: 21 })).toThrow(
    'Both arguments must be numbers'
  );
});

// ====== DIVISION TESTS ======
test('2 / 1 = 2', () => {
  expect(calculator.divide(2, 1)).toBe(2);
});

test('4 / 2 = 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('10 / -2 = -5', () => {
  expect(calculator.divide(10, -2)).toBe(-5);
});

test('-12 / -3 = 4', () => {
  expect(calculator.divide(-12, -3)).toBe(4);
});

test("Can't divide by zero", () => {
  expect(() => calculator.divide(3, 0)).toThrow("Can't divide by zero");
});

test('11 / myStr throws Error', () => {
  expect(() => calculator.divide(11, 'myStr')).toThrow(
    'Both arguments must be numbers'
  );
});

test('11 / obj throws Error', () => {
  expect(() => calculator.divide(11, { num: 21 })).toThrow(
    'Both arguments must be numbers'
  );
});
