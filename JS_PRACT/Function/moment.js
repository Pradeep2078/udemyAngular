// Import moment library
const moment = require('moment');

// Create a new moment object representing the current date and time
const now = moment();

// Display the current date and time
console.log(now.format('YYYY-MM-DD HH:mm:ss'));

// Add or subtract time
const tomorrow = now.add(1, 'days');
const yesterday = now.subtract(1, 'days').toDate();

// Format dates
console.log(tomorrow.format('YYYY-MM-DD'));
console.log(yesterday.format('YYYY-MM-DD'));

// Get the difference between two dates
const diff = tomorrow.diff(yesterday, 'days');
console.log(`Difference in days: ${diff}`);
