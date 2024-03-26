//This function determines the status of a driver's speed based on a speed limit and demerit point system.
//The speed of the car in kilometers per hour.
function speedDetector(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  // Check if the speed is within the speed limit
  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    // Calculate demerit points for exceeding the speed limit
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    // Check if the driver's license should be suspended due to excessive demerit points
    if (demeritPoints >= 12) {
      console.log("License suspended");
    } else {
      // Output the number of demerit points accrued
      console.log("Points:", demeritPoints);
    }
  }
}
// Prompt the user to enter the car's speed
const speed = parseInt(prompt("Enter car speed (km/h):"));
// Validate the input speed
if (isNaN(speed) || speed < 0) {
  console.log("Invalid input! Speed should be a non-negative number.");
} else {
  // Call the speedDetector function with the provided speed
  speedDetector(speed);
}
