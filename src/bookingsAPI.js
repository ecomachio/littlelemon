// Function to generate a seeded random number generator
const generateSeededRandom = function (seed) {
  const modulus = 2 ** 35 - 31; // A large prime number
  const multiplier = 185852; // Multiplier
  let currentSeed = seed % modulus; // Initial seed value

  return function () {
    // Generate the next random number and update the seed
    currentSeed = (currentSeed * multiplier) % modulus;
    return currentSeed / modulus;
  };
};

// Function to fetch distinct available time slots from API based on the current date
export function fetchDistinctTimeSlots() {
  const distinctTimeSlots = []; // Array to store distinct available time slots
  const currentDate = new Date(); // Get the current date
  const seed = currentDate.getTime() + Math.random(); // Combine current date with a random number to create the seed

  const randomGenerator = generateSeededRandom(seed); // Create a seeded random number generator using the combined seed

  // Generate time slots for hours between 17 and 23
  for (let hour = 17; hour <= 23; hour++) {
    if (randomGenerator() < 0.5) {
      // Generate a random number and check if it's less than 0.5
      distinctTimeSlots.push(hour + ":00"); // If true, add the hour followed by ":00" to the distinctTimeSlots array
    }
    if (randomGenerator() < 0.5) {
      // Generate another random number and check if it's less than 0.5
      distinctTimeSlots.push(hour + ":30"); // If true, add the hour followed by ":30" to the distinctTimeSlots array
    }
  }

  return distinctTimeSlots; // Return the array of distinct available time slots
}

// Function to send data to the API
export function fetchAPI() {
  // Placeholder implementation, always returns true
  return true;
}
