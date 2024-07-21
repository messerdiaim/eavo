function utcWeekNum(date) {
  // Get the date and time in UTC
  const utcDate = new Date(date.toISOString());

  // Set the first day of the week to Sunday
  utcDate.setUTCDate(utcDate.getUTCDate() - utcDate.getUTCDay());

  // Calculate the week number
  const firstDayOfYear = new Date(utcDate.getUTCFullYear(), 0, 1);
  const daysSinceFirstDayOfYear = (utcDate - firstDayOfYear) / 86400000;
  const weekNum = Math.ceil((daysSinceFirstDayOfYear + 1) / 7);

  return weekNum;
}

// Example usage
const d = new Date('2022-01-15T12:00:00Z');
console.log(utcWeekNum(d)); // Output: 2
