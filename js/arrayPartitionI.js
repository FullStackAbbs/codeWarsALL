var express  = require('express');


// https://leetcode.com/problems/array-partition-i/
//
// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
//
// Example 1:
// Input: [1,4,3,2]
//
// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
// Note:
// n is a positive integer, which is in the range of [1, 10000].
// All the integers in the array will be in the range of [-10000, 10000].
//
// Paramters: an array of intergers seperated by commas
// Return: the maxiumum number of pairs
// Example: Input: [1,4,3,2]
//
// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
// input: [1,1] output: 1

// node arrayPartitionI.js

// PsuedoCode
// we must create a new array that is 2n NOTE: what we currently have is an array of n
// sort the number away in ascending order
// create the new array that only takes even or 2n index
// sum the expression with the arrat

let arrayPairSum = function(nums) {
	let sorted=nums.sort((a, b) => a - b)
  let filtered= sorted.filter((x,index) => index % 2 === 0)
  let summed= filtered.reduce((a,b) => a+b);
  console.log(sorted,filtered,summed)


};
arrayPairSum([1,42,12,3,43,52])
