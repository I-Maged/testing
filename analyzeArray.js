const analyzeArray = (arr) => {
  if (!Array.isArray(arr)) {
    return 'Input must be an array';
  }
  for (let item of arr) {
    if (typeof item !== 'number') {
      return 'array values must be numbers';
    }
  }

  const length = arr.length;

  const sum = arr.reduce((acc, current) => acc + current, 0);

  const average = sum / length;

  const min = arr.reduce((current, previous) => {
    return Math.min(current, previous);
  });

  const max = arr.reduce((current, previous) => {
    return Math.max(current, previous);
  });

  const analyzedArray = {
    average: average,
    min: min,
    max: max,
    length: length,
  };

  return analyzedArray;
};

export default analyzeArray;
