const analyzeArray = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('input must be an array');
  }

  arr.forEach((item) => {
    if (typeof item !== 'number') {
      throw new Error('all array items must be numbers');
    }
  });

  return {
    average: arr.reduce((prev, cur) => prev + cur, 0) / arr.length,
    min: arr.sort((a, b) => a - b)[0],
    max: arr.sort((a, b) => b - a)[0],
    length: arr.length,
  };
};

export { analyzeArray };
