'use strict';

const solution = module.exports = {};

solution.mergeSortTwo = function(arr) {
  if (!arr || !Array.isArray(arr)) return null;
  if(arr.length < 2) return arr;

  if(arr.length === 2)
    return arr[0] < arr[1] ? arr : [arr[1], arr[0]];

  const middlePoint = Math.floor(arr.length / 2);

  const leftSide = solution.mergeSortTwo(arr.slice(0, middlePoint));
  const rightSide = solution.mergeSortTwo(arr.slice(middlePoint));

  arr = [];

  while(leftSide.length || rightSide.length) {
    if(leftSide.length && !rightSide.length) {
      arr = arr.concat(leftSide);
      break;
    }
    if(!leftSide.length && rightSide.length) {
      arr = arr.concat(rightSide);
      break;
    }

    if(leftSide[0]<= rightSide[0]) {
      arr.push(leftSide.shift());
    } else {
      arr.push(rightSide.shift());
    }
  }
  return arr;
};


