const calculator = (num1, num2, op) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Inputs must be numbers';
  }

  if (op === '+') {
    return num1 + num2;
  } else if (op === '-') {
    return num1 - num2;
  } else if (op === '*') {
    return num1 * num2;
  } else if (op === '/') {
    return num1 / num2;
  } else {
    return 'Invalid operator';
  }
};

export default calculator;
