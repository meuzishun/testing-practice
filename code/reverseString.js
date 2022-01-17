const reverseString = function (str) {
  if (typeof str !== 'string') {
    throw new Error('Only string arguments');
  }
  return str.split('').reverse().join('');
};

export { reverseString };
