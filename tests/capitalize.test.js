import capitalize from '../code/capitalize.js';

test('First letter should be capitalized', () => {
  expect(capitalize('word')).toBe('Word');
});

test('Mixed cases should return capitalized', () => {
  expect(capitalize('wOrD')).toBe('Word');
});

test('All uppercase should return capitalized', () => {
  expect(capitalize('WORD')).toBe('Word');
});

test('Multiple word excepted', () => {
  expect(capitalize('word, words, and more stuff')).toBe(
    'Word, words, and more stuff'
  );
});

test('Tame the madness', () => {
  expect(capitalize('wert48rfuhdoi lHYUI Tfer983 shgru')).toBe(
    'Wert48rfuhdoi lhyui tfer983 shgru'
  );
});
