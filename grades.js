
// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

var F = 0;
var D = 0;
var C = 0;
var B = 0;
var A = 0;

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for (i=0; i < scores.length; i ++) {
	if (scores[i] >= 91) {
		 A++;
		
	}
	else if (scores[i] >= 81) {
		B++;

	}else if (scores[i] >= 71) {
		C++;
	}else if (scores[i] >= 61) {
		D++;
	}else if (scores[i] >= 0) {
		F++;
	}

}

	console.log("These are B's in class",B);


	console.log("These are C's in class",C);


	console.log("These are D's in class",D);


	console.log("These are F's in class",F);

	var sortedGrades = scores.sort;
	var lowGrade = sortedGrades[0];
	var highGrade = sortedGrades[sortedGrades.length -1];




