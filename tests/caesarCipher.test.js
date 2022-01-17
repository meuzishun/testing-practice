import { caesarCipher } from '../code/caesarCipher.js';

// ======ENCODING TESTS======
test('shifting abc by 1 returns bcd', () => {
  expect(caesarCipher.encode('abc', 1)).toBe('bcd');
});

test('shifting xyz by 1 returns yza', () => {
  expect(caesarCipher.encode('xyz', 1)).toBe('yza');
});

test('shifting ABC by 1 returns BCD', () => {
  expect(caesarCipher.encode('ABC', 1)).toBe('BCD');
});

test('shifting XYZ by 1 returns YZA', () => {
  expect(caesarCipher.encode('XYZ', 1)).toBe('YZA');
});

test('shifting abc by 2 return cde', () => {
  expect(caesarCipher.encode('abc', 2)).toBe('cde');
});

test('encode works with multiple words', () => {
  expect(caesarCipher.encode('the cat in the hat', 1)).toBe(
    'uif dbu jo uif ibu'
  );
});

test('encode works with multiple cases', () => {
  expect(caesarCipher.encode('the Cat IN the Hat', 1)).toBe(
    'uif Dbu JO uif Ibu'
  );
});

test('encode works with multiple cases and large shifts', () => {
  expect(caesarCipher.encode('the Cat IN the Hat', 12)).toBe(
    'ftq Omf UZ ftq Tmf'
  );
});

test('encode works with non-letters', () => {
  expect(caesarCipher.encode('the Cat &% the Hat', 1)).toBe(
    'uif Dbu &% uif Ibu'
  );
});

test('encode only accepts strings', () => {
  expect(() =>
    caesarCipher.encode(['the', 'Cat', '&%', 'the', 'Hat'], 1)
  ).toThrow('Only strings accepted');
});

test('encode only accepts strings', () => {
  expect(() => caesarCipher.encode({ the: 'Cat', his: 'Hat' }, 1)).toThrow(
    'Only strings accepted'
  );
});

test('Provide shifted value', () => {
  expect(() => caesarCipher.encode('the cat in the hat')).toThrow(
    'Must provide a shifted number'
  );
});

test('Provide shifted value', () => {
  expect(caesarCipher.encode('the cat in the hat', 0)).toBe(
    'the cat in the hat'
  );
});

// ======DECODING TESTS======

test('unshifting bcd by 1 returns abc', () => {
  expect(caesarCipher.decode('bcd', 1)).toBe('abc');
});

test('unshifting yza by 1 returns xyz', () => {
  expect(caesarCipher.decode('yza', 1)).toBe('xyz');
});

test('unshifting BCD by 1 returns ABC', () => {
  expect(caesarCipher.decode('BCD', 1)).toBe('ABC');
});

test('unshifting YZA by 1 returns XYZ', () => {
  expect(caesarCipher.decode('YZA', 1)).toBe('XYZ');
});

test('unshifting cde by 2 return abc', () => {
  expect(caesarCipher.decode('cde', 2)).toBe('abc');
});

test('decode works with multiple words', () => {
  expect(caesarCipher.decode('uif dbu jo uif ibu', 1)).toBe(
    'the cat in the hat'
  );
});

test('decode works with multiple cases', () => {
  expect(caesarCipher.decode('uif Dbu JO uif Ibu', 1)).toBe(
    'the Cat IN the Hat'
  );
});

test('decode works with multiple cases and large shifts', () => {
  expect(caesarCipher.decode('ftq Omf UZ ftq Tmf', 12)).toBe(
    'the Cat IN the Hat'
  );
});

test('decode works with non-letters', () => {
  expect(caesarCipher.decode('uif Dbu &% uif Ibu', 1)).toBe(
    'the Cat &% the Hat'
  );
});

test('encode only accepts strings', () => {
  expect(() =>
    caesarCipher.decode(['uif', 'Dbu', '&%', 'uif', 'Ibu'], 1)
  ).toThrow('Only strings accepted');
});

test('encode only accepts strings', () => {
  expect(() => caesarCipher.decode({ uif: 'Dbu', uif: 'Ibu' }, 1)).toThrow(
    'Only strings accepted'
  );
});

test('Provide shifted value', () => {
  expect(() => caesarCipher.decode('uif dbu jo uif ibu')).toThrow(
    'Must provide a shifted number'
  );
});

test('Provide shifted value', () => {
  expect(caesarCipher.decode('the cat in the hat', 0)).toBe(
    'the cat in the hat'
  );
});
