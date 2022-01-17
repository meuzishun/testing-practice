import { reverseString } from '../code/reverseString.js';

test('Strings should reverse', () => {
  expect(reverseString('racecar')).toBe('racecar');
});

test('Multiple words accepted', () => {
  expect(reverseString('My name is...')).toBe('...si eman yM');
});

test('Numbers accepted', () => {
  expect(reverseString('12345 6789')).toBe('9876 54321');
});
