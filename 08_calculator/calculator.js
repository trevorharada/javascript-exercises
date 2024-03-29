const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => sum * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let sum = 1;
  if (a === 0) {
    return sum;
  } else {
    for (let i = a; i > 1; i--) {
      sum *= i
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
