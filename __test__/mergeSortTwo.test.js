'use strict';

const solution = require('../lib/mergeSortTwo');
require('jest');

let test = [1,8,5,3,9,6,2,4];
let testTwo = [8,5];
let testThree = [5];
let testAnswer = [ 1, 2, 3, 4, 5, 6, 8, 9 ];


describe('Merge Sort Version Two', () => {
  describe('Valid input', () => {
    it('Should check to verify the right output is returned', () => {
      expect(solution.mergeSortTwo(test)).toEqual(testAnswer);
    });
    it('Should check to verify the right output of 2 digits is returned', () => {
      expect(solution.mergeSortTwo(testTwo)).toEqual([5,8]);
    });
    it('Should check to verify the right output of a single digit is returned', () => {
      expect(solution.mergeSortTwo(testThree)).toEqual([5]);
    });
  });

  describe('Invalid Input', () => {
    it('Should return null if no valid input is provided', () => {
      expect(solution.mergeSortTwo()).toBeNull();
      expect(solution.mergeSortTwo(4)).toBeNull();
      expect(solution.mergeSortTwo('dog')).toBeNull();
    });
  });
});