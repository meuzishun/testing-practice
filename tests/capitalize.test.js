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

test('Multiple word accepted', () => {
  expect(capitalize('word, words, and more stuff')).toBe(
    'Word, words, and more stuff'
  );
});

test('Works  with     odd spacing     .', () => {
  expect(capitalize('works  with     odd spacing     .')).toBe(
    'Works  with     odd spacing     .'
  );
});

test('Works with empty string', () => {
  expect(capitalize('')).toBe('');
});

test('Throws error for non-string arguments', () => {
  () => expect(capitalize(123)).toThrow('Only string arguments accepted');
});

test('Throws error for non-string arguments', () => {
  () => {
    expect(capitalize(['words', 'more', 'stuff'])).toThrow(
      'Only string arguments accepted'
    );
  };
});

test('Throws error for non-string arguments', () => {
  () => {
    expect(capitalize({ name: 'cat', isIn: 'hat' })).toThrow(
      'Only string arguments accepted'
    );
  };
});

test('Tame the madness', () => {
  expect(capitalize('wert48rfuhdoi lHYUI Tfer983 shgru')).toBe(
    'Wert48rfuhdoi lhyui tfer983 shgru'
  );
});
