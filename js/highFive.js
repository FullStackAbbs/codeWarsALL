var express  = require('express');
//
//
// Given a list of scores of different students, return the average score of each student's top five scores in the order of each student's id.
//
// Each entry items[i] has items[i][0] the student's id, and items[i][1] the student's score.  The average score is calculated using integer division.
//
//
//
// Example 1:
//
// Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]
// Explanation:
// The average of the student with id = 1 is 87.
// The average of the student with id = 2 is 88.6. But with integer division their average converts to 88.
//
//
// Note:
//
// 1 <= items.length <= 1000
// items[i].length == 2
// The IDs of the students is between 1 to 1000
// The score of the students is between 1 to 100
// For each student, there are at least 5 scores

// Psuedo PsuedoCode
// sort through the arrays of arrays, and match them by ID (use filter)
// of the newly made array create a new array of only test scores
// sort the test score array in descending order
// take the index[0-4] to get the top five (maybe use substring)
// after extract those five values , sum it up (reduce), divide by 5
// return a console.log `Student ${id} has a top five average of ${output}


let gradebook = function(input) {
	for(let entry of input){
		for(let id of entry){
			let filter1= entry.filter((x,index) => index % 2 === 0)
			let filter2= entry.filter((x,index) => index % 2 != 0)

			console.log(filter1,filter2)


			}
		}
			// console.log(entry)
	}

gradebook([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]])
// node highFive.js
