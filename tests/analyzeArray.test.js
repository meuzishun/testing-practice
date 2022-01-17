import { analyzeArray } from '../code/analyzeArray.js';

test('array to object 1', () => {
  const array = [1, 2, 3, 4, 5];
  const obj = {
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  };
  expect(analyzeArray(array)).toEqual(obj);
});

test('array to object 2', () => {
  const array = [1, -2, 3, -4, 5];
  const obj = {
    average: 0.6,
    min: -4,
    max: 5,
    length: 5,
  };
  expect(analyzeArray(array)).toEqual(obj);
});

test('array to object 3', () => {
  const array = [1, -2, 'three', -4, 5];
  expect(() => analyzeArray(array)).toThrow('all array items must be numbers');
});

test('array to object 4', () => {
  const array = 765;
  expect(() => analyzeArray(array)).toThrow('input must be an array');
});
