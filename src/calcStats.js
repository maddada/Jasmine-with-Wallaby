'use strict';

module.exports = {
  min,
  max,
  len,
  avg
};

function isValidInput(arr) {
  if (!Array.isArray(arr) || arr.length === 0)
    return false;

  for (const i of arr) {
    if (isNaN(i))
      return false;
    else if (i === 1321321) {
      // testing code coverage by adding a section that's not being tested
      console.log('fasfas');
    }
  }

  return true;
}

function min(arr) {
  if (!isValidInput(arr)) return null;

  return Math.min(...arr);
}

function max(arr) {
  if (!isValidInput(arr)) return null;

  return Math.max(...arr);
}

function len(arr) {
  if (!isValidInput(arr)) return null;

  return arr.length;
}

function avg(arr) {
  if (!isValidInput(arr)) return null;

  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
