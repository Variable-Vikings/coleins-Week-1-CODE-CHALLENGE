// Student Marks
// Define the student's marks
const marks = 70;

// Check the range of marks and assign the grade
if (marks > 79 && marks < 100) {
  console.log("Your grade is A");
} else if (marks >= 60 && marks <= 79) {
  console.log("Your grade is B");
} else if (marks >= 50 && marks <= 59) {
  console.log("Your grade is C");
} else if (marks >= 40 && marks <= 49) {
  console.log("Your grade is D");
} else if (marks > 0 && marks < 40) {
  console.log("Your grade is E");
}
// for marks below 0 and beyond 100)
else {
  console.log("Invalid marks!!!");
}
