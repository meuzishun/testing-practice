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

test('Only string arguments accepted', () => {
  expect(() => reverseString(12345)).toThrow('Only string arguments');
});

test('Only string arguments accepted', () => {
  expect(() => reverseString(['I am a string!'])).toThrow(
    'Only string arguments'
  );
});

test('Only string arguments accepted', () => {
  expect(() => reverseString({ type: 'string', content: 'stuff' })).toThrow(
    'Only string arguments'
  );
});
