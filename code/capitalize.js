const capitalize = function (str) {
  if (typeof str !== 'string') {
    throw new Error('Only string arguments accepted');
  }
  if (str === '') return '';
  return str.split('')[0].toUpperCase() + str.slice(1).toLowerCase();
};

export default capitalize;
