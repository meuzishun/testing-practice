const capitalize = function (str) {
  return str.split('')[0].toUpperCase() + str.slice(1).toLowerCase();
};

export default capitalize;
