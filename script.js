const reverseString = function (string) {
  return string.split('').reverse().join('');
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
// export default reverseString;
export { reverseString, capitalize };
